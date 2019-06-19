const {
    connector,
    Sequelize
} = require("../config/dbConfig");

/* Define a model for table Users */
module.exports = connector.define("snippets", {
    snippet: Sequelize.STRING
});