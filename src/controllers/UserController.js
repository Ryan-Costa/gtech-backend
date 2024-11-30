class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async create(req, res) {
    const { firstname, surname, email, password } = req.body;

    if (!firstname || !surname || !email || !password) {
      return res.status(400).json({
        message:
          "Todos os campos (nome, sobrenome, email, senha) são obrigatórios",
      });
    }

    console.log("Recebendo senha no controlador:", password);

    try {
      const userAlreadyExists = await this.userService.getUserByEmail(email);
      if (userAlreadyExists) {
        return res.status(400).json({ message: "Esse usuário já existe" });
      }

      console.log("Criando usuário:", { firstname, surname, email });

      const user = await this.userService.createUser({
        firstname,
        surname,
        email,
        password,
      });

      console.log("Usuário criado com sucesso:", user);

      return res.status(201).json(user);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);

      return res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;

    try {
      const token = await this.userService.login(email, password);
      const user = await this.userService.getUserByEmail(email);

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      const isPasswordValid = await this.userService.validatePassword(
        password,
        user.password
      );
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Senha inválida" });
      }

      return res
        .status(200)
        .json({
          message: "Login bem-sucedido",
          user: {
            id: user.id,
            name: user.firstname + user.surname,
            email: user.email,
          },
          token,
        });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const users = await this.userService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getUser(req, res) {
    const { id } = req.params;

    try {
      const user = await this.userService.getUserById(id);
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { firstname, surname, email, password } = req.body;

    try {
      const user = await this.userService.updatedUser(id, {
        firstname,
        surname,
        email,
        password,
      });

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const result = await this.userService.deleteUser(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserController;
