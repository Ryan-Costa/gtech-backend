# Documentação dos Endpoints da API

## Autenticação

#### POST /login - Logar na aplicação

- Content-Type: application/json

```
{
  "email": "usuario@exemplo.com",
  "password": "senha123"
}
```

#### Resposta

```
{
  "message": "Login bem-sucedido",
  "user": {
    "id": 2,
    "name": "RyanSouza",
    "email": "ryan.souza@gmail.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJyeWFuLnN..."
}
```

#### Armazene o token gerado e inclua-o nas próximas requisições como um cabeçalho Authorization: Bearer <token>.

## Endpoints

### Usuários

#### POST /register - Criar um novo usuário

- Content-Type: application/json
- Authentication: Token

```
{
  "firstname": "Ryan",
  "surname": "Costa",
  "email": "ryan.costa@gmail.com",
  "password": "senha1234"
}
```

#### Resposta

```
{
  "id": 3,
  "firstname": "Ryan",
  "surname": "Costa",
  "email": "ryan.costa@gmail.com",
  "password": "$2b$10$dNhH8CFqAChgPc4t8wcoN.rVpXpr0xv4fqvA99uzyaAKvCJjKUAeW",
  "updatedAt": "2024-11-30T19:14:23.248Z",
  "createdAt": "2024-11-30T19:14:23.248Z"
}
```

#### GET /users - Obter todos os usuários

- Content-Type: application/json

#### Resposta

```
[
  {
    "id": 2,
    "firstname": "Ryan",
    "surname": "Souza",
    "email": "ryan.souza@gmail.com",
    "password": "$2b$10$HvWLfTx6i30SCJC6i...",
    "createdAt": "2024-11-30T04:00:49.369Z",
    "updatedAt": "2024-11-30T04:07:32.212Z"
  },
  {
    "id": 3,
    "firstname": "Ryan",
    "surname": "Costa",
    "email": "ryan.costa@gmail.com",
    "password": "$2b$10$dNhH8CFqAChgPc4t...",
    "createdAt": "2024-11-30T19:14:23.248Z",
    "updatedAt": "2024-11-30T19:14:23.248Z"
  }
]
```

#### PUT /user/id - Atualizar um usuário

- Content-Type: application/json
- Authentication: Token

```
{
  "firstname": "Ryan",
  "surname": "Souza",
  "email": "ryan.souza@gmail.com",
  "password": "senha1234"
}
```

#### Resposta

```
{
  "id": 3,
  "firstname": "Ryan",
  "surname": "Costa Souza",
  "email": "ryan.costa.souza@gmail.com",
  "password": "$2b$10$DGXFwR/e.82DOiwb2PPLrugcsObAmG/tcN9IZccgg7.hHojG1tuI.",
  "createdAt": "2024-11-30T19:14:23.248Z",
  "updatedAt": "2024-11-30T19:18:43.723Z"
}
```

#### GET /user/id - Obter usuário pelo ID

- Content-Type: application/json

#### Resposta

```
{
  "id": 3,
  "firstname": "Ryan",
  "surname": "Costa Souza",
  "email": "ryan.costa.souza@gmail.com",
  "password": "$2b$10$DGXFwR/e.82DOiwb2PPLrugcsObAmG/tcN9IZccgg7.hHojG1tuI.",
  "createdAt": "2024-11-30T19:14:23.248Z",
  "updatedAt": "2024-11-30T19:18:43.723Z"
}
```

#### DELETE /user/id - Deletar usuário

- Content-Type: application/json
- Authentication: Token

#### Resposta

```
{
  "message": "Usuário deletado com sucesso"
}
```

### Produtos

#### POST /products - Criar um novo produto

- Content-Type: application/json
- Authentication: Token

```
{
  "name": "Tenis Vans OldScholl",
  "enabled": true,
  "use_in_menu": true,
  "stock": 30,
  "description": "Tenis Top da Vans",
  "price": 120.00,
  "price_with_discount": 90.00
}
```

#### Resposta

```
{
  "id": 6,
  "name": "Tenis Vans OldScholl",
  "slug": "tenis-vans-oldscholl",
  "price": 120,
  "price_with_discount": 90,
  "enabled": true,
  "use_in_menu": true,
  "stock": 30,
  "description": "Tenis Top da Vans",
  "updatedAt": "2024-11-30T19:06:56.749Z",
  "createdAt": "2024-11-30T19:06:56.749Z"
}
```

#### GET /products - Obter todos os produtos

- Content-Type: application/json

#### Resposta

```
[
  {
    "id": 1,
    "name": "Tenis Vans",
    "slug": "tenis-vans",
    "enabled": true,
    "use_in_menu": true,
    "stock": 50,
    "description": "Tenis Top da Vans",
    "price": 100,
    "price_with_discount": 80,
    "createdAt": "2024-11-30T04:40:01.692Z",
    "updatedAt": "2024-11-30T04:40:01.692Z"
  },
  {
    "id": 3,
    "name": "Tenis Nike",
    "slug": "tenis-nike",
    "enabled": true,
    "use_in_menu": true,
    "stock": 20,
    "description": "Tenis Top da Nike",
    "price": 250,
    "price_with_discount": 220,
    "createdAt": "2024-11-30T04:45:40.912Z",
    "updatedAt": "2024-11-30T04:45:40.912Z"
  },
  {
    "id": 4,
    "name": "Tenis Adidas",
    "slug": "tenis-adidas",
    "enabled": true,
    "use_in_menu": true,
    "stock": 10,
    "description": "Tenis Top da Adidas",
    "price": 350,
    "price_with_discount": 300,
    "createdAt": "2024-11-30T04:45:55.227Z",
    "updatedAt": "2024-11-30T04:45:55.227Z"
  },
  {
    "id": 5,
    "name": "Tenis New Balance",
    "slug": "tenis-new-balance",
    "enabled": true,
    "use_in_menu": true,
    "stock": 30,
    "description": "Tenis Top da New Balance",
    "price": 120,
    "price_with_discount": 90,
    "createdAt": "2024-11-30T04:46:18.868Z",
    "updatedAt": "2024-11-30T04:46:18.868Z"
  },
  {
    "id": 6,
    "name": "Tenis Vans OldScholl",
    "slug": "tenis-vans-oldscholl",
    "enabled": true,
    "use_in_menu": true,
    "stock": 30,
    "description": "Tenis Top da Vans",
    "price": 120,
    "price_with_discount": 90,
    "createdAt": "2024-11-30T19:06:56.749Z",
    "updatedAt": "2024-11-30T19:06:56.749Z"
  }
]
```

#### GET /product/id - Obter produto por ID

- Content-Type: application/json

#### Resposta

```
{
 "id": 3,
 "name": "Tenis Nike",
 "slug": "tenis-nike",
 "enabled": true,
 "use_in_menu": true,
 "stock": 20,
 "description": "Tenis Top da Nike",
 "price": 250,
 "price_with_discount": 220,
 "createdAt": "2024-11-30T04:45:40.912Z",
 "updatedAt": "2024-11-30T04:45:40.912Z"
}
```

#### PUT /product/id - Atualizar produto

- Content-Type: application/json
- Authentication: Token

```
{
  "name": "Tenis New Balance",
  "enabled": true,
  "use_in_menu": true,
  "stock": 30,
  "description": "Tenis Top da New Balance",
  "price": 120.00,
  "price_with_discount": 90.00
}
```

#### Resposta

```
{
  "id": 6,
  "name": "Tenis New Balance",
  "slug": "tenis-new-balance",
  "enabled": true,
  "use_in_menu": true,
  "stock": 30,
  "description": "Tenis Top da New Balance",
  "price": 120,
  "price_with_discount": 90,
  "createdAt": "2024-11-30T19:06:56.749Z",
  "updatedAt": "2024-11-30T19:37:29.373Z"
}
```

#### DELETE /product/id - Deletar produto

- Content-Type: application/json
- Authentication: Token

#### Resposta

```
{
  "message": "Produto deletado com sucesso"
}
```

### Categorias

#### POST /category - Criar uma categoria

- Content-Type: application/json
- Authorization: Token

```
{
  "name": "Home",
  "use_in_menu": true
}
```

#### Resposta

```
{
  "id": 6,
  "name": "Home",
  "slug": "home",
  "use_in_menu": true,
  "updatedAt": "2024-11-30T19:43:01.384Z",
  "createdAt": "2024-11-30T19:43:01.384Z"
}
```

#### GET /categories - Obter todas as categorias

- Content-Type: application/json

#### Resposta

```
[
  {
    "id": 2,
    "name": "Educação Atualizada",
    "slug": "educacao-atualizada",
    "use_in_menu": false,
    "createdAt": "2024-11-30T02:09:28.543Z",
    "updatedAt": "2024-11-30T02:15:54.447Z"
  },
  {
    "id": 3,
    "name": "Tecnologia",
    "slug": "tecnologia",
    "use_in_menu": true,
    "createdAt": "2024-11-30T02:15:30.593Z",
    "updatedAt": "2024-11-30T02:15:30.593Z"
  }
]
```

#### GET /category/id - Obter categoria por ID

- Content-Type: application/json

#### Resposta

```
{
  "id": 3,
  "name": "Tecnologia",
  "slug": "tecnologia",
  "use_in_menu": true,
  "createdAt": "2024-11-30T02:15:30.593Z",
  "updatedAt": "2024-11-30T02:15:30.593Z"
}
```

#### PUT /category/id - Atualizar uma categoria

- Content-Type: application/json
- Authorization: Token

```
{
  "name": "Calçadinhos da Vovó",
  "use_in_menu": false
}
```

#### Resposta

```
{
  "id": 5,
  "name": "Calçadinhos da Vovó",
  "slug": "calcadinhos-da-vovo",
  "use_in_menu": false,
  "createdAt": "2024-11-30T02:27:50.452Z",
  "updatedAt": "2024-11-30T02:29:07.036Z"
}
```

#### DELETE /category/id - Deletar uma categoria

- Content-Type: application/json
- Authorization: Token

```
{
  "message": "Categoria removida com sucesso"
}
```
