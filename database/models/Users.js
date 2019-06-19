const {
  connector,
  Sequelize
} = require("../config/dbConfig");

/* Define a model for table Users */
module.exports = connector.define("users", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
});