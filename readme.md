## Projeto Back End

### Trata-se de um projeto de uma api do curso da geranção tech

### Node.js para fornecer a possibilidade de executar JS em um servidor

- <b>Express.js</b> para criar rotas de api
- <b>Nodemon</b> para termos mais produtividade em nosso ambiente de desenvolvimento
- <b>Postgres</b> para persistência de dados
- <b>Sequelize</b> para termos mais produtividade ao lidar com o banco de dados
- <b>JWT</b> Adiciona segurança ao projeto, permitindo a autenticação de usuários e o controle de acesso às rotas da API
- <b>Documentação</b> Não utilizei Swagger, a documentação pode ser acessada pelo arquivo na raiz do projeto chamado <b>documentation.md</b>

### 1. Clone o repositório

```
git clone https://github.com/Ryan-Costa/gtech-backend
```

#### Entre no diretório do projeto:

```
cd gtech-backend
```

### 2. Instale as dependências

```
npm install
```

### 3. Configure as variáveis de ambiente

- Acesse o arquivo .env.example

### 4. Configure o banco de dados

```
npx sequelize-cli db:migrate
```

### 5. Inicie o servidor

```
npm run dev
```

### Estrutura do projeto

```
├── src
│   ├── controllers      # Lógica dos endpoints
│   ├── models           # Definição dos modelos (Sequelize)
│   ├── database         # Localização das migrations
│   ├── functions        # Funções auxiliares reutilizáveis
│   ├── routes           # Definição e organização das rotas da API
│   ├── config           # Configurações gerais da aplicação
│   ├── services         # Regras de negócio e lógica reutilizável
│   ├── app.js           # Configuração principal da aplicação
│   ├── routes.js        # Registro central de todas as rotas da aplicação
│   └── server.js        # Inicialização do servidor (porta, execução da aplicação)
├── .env                 # Arquivo de variáveis de ambiente
└── package.json         # Dependências e scripts do projeto
```

#### Obs: O projeto não conta com testes e nem com autentição JWT, mas deixarei um link de outro projeto que realizei para uma entrevista para que seja comprovado minha capacidade.
