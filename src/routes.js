const { Router } = require("express");
const UserService = require("./services/UserService");
const UserController = require("./controllers/UserController");
const CategoryService = require("./services/CategoryService");
const CategoryController = require("./controllers/CategoryController");
const ProductService = require("./services/ProductService");
const ProductController = require("./controllers/ProductController");

const routes = Router();

const userService = new UserService();
const userController = new UserController(userService);

const categoryService = new CategoryService();
const categoryController = new CategoryController(categoryService);

const productService = new ProductService();
const productController = new ProductController(productService);

// user routes
routes.post("/register", (req, res) => userController.create(req, res));
routes.post("/login", (req, res) => userController.login(req, res));
routes.get("/users", (req, res) => userController.getAll(req, res));
routes.get("/user/:id", (req, res) => userController.getUser(req, res));
routes.put("/user/:id", (req, res) => userController.update(req, res));
routes.delete("/user/:id", (req, res) => userController.delete(req, res));

// category routes
routes.post("/category", (req, res) => categoryController.create(req, res));
routes.get("/categories", (req, res) => categoryController.getAll(req, res));
routes.get("/category/:id", (req, res) => categoryController.getById(req, res));
routes.put("/category/:id", (req, res) => categoryController.update(req, res));
routes.delete("/category/:id", (req, res) =>
  categoryController.delete(req, res)
);

// product routes
routes.post("/product", (req, res) => productController.create(req, res));
routes.get("/products", (req, res) => productController.getAll(req, res));
routes.get("/product/:id", (req, res) => productController.getById(req, res));
routes.put("/product/:id", (req, res) => productController.update(req, res));
routes.delete("/product/:id", (req, res) => productController.delete(req, res));

module.exports = routes;
