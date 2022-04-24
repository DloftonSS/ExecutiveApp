require("dotenv").config();
// file to config MySQL database using Sequelize. we are using a .env file to pass the credentials.
module.exports = {
  development: {
    host: process.env.EA_host,
    user: process.env.EA_user,
    password: process.env.EA_password,
    database: process.env.EA_database,
  },
  //   test: {
  //     username: process.env.DB_USER,
  //     password: process.env.DB_PASSWORD,
  //     database: process.env.DB_DATABASE,
  //     host: process.env.DB_HOST,
  //     dialect: "mysql",
  //     port: process.env.PORT,
  //     operatorsAliases: 0,
  //     jwtSecret: process.env.JWT_SECRET,
  //     user: process.env.EMAIL_USERNAME,
  //     pass: process.env.EMAIL_PASSWORD,
  //   },
  production: {
    host: process.env.EA_host,
    user: process.env.EA_user,
    password: process.env.EA_password,
    database: process.env.EA_database,
  },
};
