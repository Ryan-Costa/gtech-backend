const bcrypt = require("bcrypt");
const { User } = require("../models");

class UserService {
  async createUser({ firstname, surname, email, password }) {
    try {
      console.log("Recebendo senha:", password);

      const user = await User.create({
        firstname,
        surname,
        email,
        password,
      });
      return user;
    } catch (error) {
      throw new Error("Erro ao criar usuário: " + error.message);
    }
  }

  async getUserByEmail(email) {
    try {
      const user = await User.findOne({ where: { email } });
      return user;
    } catch (error) {
      throw new Error("Usuário não encontrado: " + error.message);
    }
  }

  async getUserById(id) {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      throw new Error("Usuário não encontrado: " + error.message);
    }
  }

  async getAllUsers() {
    try {
      const users = await User.findAll({
        order: [["id", "ASC"]],
      });
      return users;
    } catch (error) {
      throw new Error("Erro ao buscar usuários: " + error.message);
    }
  }

  async updatedUser(id, { firstname, surname, email, password }) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      user.firstname = firstname || user.firstname;
      user.surname = surname || user.surname;
      user.email = email || user.email;

      if (password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
      }

      await user.save();
      return user;
    } catch (error) {
      throw new Error("Erro ao atualizar usuário: " + error.message);
    }
  }

  async deleteUser(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      await user.destroy();
      return { message: "Usuário deletado com sucesso" };
    } catch (error) {
      throw new Error("Erro ao deletar usuário: " + error.message);
    }
  }

  async validatePassword(inputPassword, userPasswordHash) {
    try {
      console.log("Comparando senha:", inputPassword);

      const isValid = await bcrypt.compare(inputPassword, userPasswordHash);
      console.log("Senha válida:", isValid);

      return isValid;
    } catch (error) {
      throw new Error("Erro ao validar senha: " + error.message);
    }
  }
}

module.exports = UserService;
