const Snippets = require("../database/models/Snippets");
const pool = require("../database/config/dbConfig")



module.exports = {

    // const snippetToDatabase = connector.define("snippet1", {});


    getSnippet: (req, res) => {
        res.render("snippet1")
    },
    getSnippet2: (req, res) => {
        res.render("snippet2");
    },
    getSnippet3: (req, res) => {
        res.render("snippet3");
    },
    getSnippet4: (req, res) => {
        res.render("snippet4");
    },
    getSnippet5: (req, res) => {
        res.render("snippet5");
    },
    getSnippet6: (req, res) => {
        res.render("snippet6");
    },
    getSnippet7: (req, res) => {
        res.render("snippet7");
    },
    getSnippet8: (req, res) => {
        res.render("snippet8");
    },
    getSnippet9: (req, res) => {
        res.render("snippet9");
    },
    getSnippet10: (req, res) => {
        res.render("snippet10");
    },

    getIndex: (req, res) => {
        res.render("index");
    },
    getRegister: (req, res) => {
        res.render("register");
    }
}