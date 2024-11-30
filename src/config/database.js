require("dotenv").config();

module.exports = {
  username: process.env.DB_USERNAME || "default_username",
  password: process.env.DB_PASSWORD || "default_password",
  database: process.env.DB_NAME || "default_database",
  host: process.env.DB_HOST || "127.0.0.1",
  dialect: process.env.DB_DIALECT || "postgres",
};
