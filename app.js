require("dotenv").config();

/* Database configuration */
const {
  connector
} = require("./database/config/dbConfig");

/* Controllers */
const getHome = require("./controllers/homeController");
const snippetController = require("./controllers/snippetController");

const getProfile = require("./controllers/profileController");
const getLogout = require("./controllers/logoutController");
const {
  getRegistrationPage,
  postUserRegistration
} = require("./controllers/registerController");
const {
  getLoginPage,
  postUserLogin
} = require("./controllers/loginController");

const Users = require('./database/models/Users')
const Snippets = require('./database/models/Snippets')
const Favorites = require('./database/models/Favorites')


/* NPM packages */
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const morgan = require("morgan");
const flash = require("express-flash");
const {
  check
} = require("express-validator/check");


/* Application conf */
const port = process.env.PORT || 3000;
const app = express();

/* Template engine setup */
app.set("view engine", "ejs");


/* Middleware: NPM packages */
app.use(morgan("dev"));
app.use(flash());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(
  session({
    name: process.env.SESSION_COOKIE,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

/* Custom Middleware */
let isUserLoggedIn = (req, res, next) => {
  if (req.session.user && req.cookies.indCookie) {
    res.redirect("/profile");
  } else {
    next();
  }
};

/* Routes */
app.get('/snippet1', snippetController.getSnippet)
app.get('/snippet2', snippetController.getSnippet2)
app.get('/snippet3', snippetController.getSnippet3)
app.get('/snippet4', snippetController.getSnippet4)
app.get('/snippet5', snippetController.getSnippet5)
app.get('/snippet6', snippetController.getSnippet6)
app.get('/snippet7', snippetController.getSnippet7)
app.get('/snippet8', snippetController.getSnippet8)
app.get('/snippet9', snippetController.getSnippet9)
app.get('/snippet10', snippetController.getSnippet10)

app.post('/snippet1', (req, res) => {
  if (req.session.user && req.cookies.indCookie) {
    Snippets.create({
        snippet: req.body.text
      }).then(results => {
        console.log(results.dataValues)
        Favorites.create({
            userId: req.session.user.id,
            snippetId: results.dataValues.id
          })
          .then(resultsFavorites => {
            console.log(resultsFavorites.dataValues)
            Snippets.findByPk(resultsFavorites.dataValues.snippetId)
              .then(result => {
                res.render('profile', {
                  snippet: result.dataValues
                })
              })
              .catch()
          })
          .catch()
      })
      .catch()
  } else {
    res.redirect('/login')
  }

})

app.get("/", isUserLoggedIn, getHome);
app.get("/register", isUserLoggedIn, getRegistrationPage);
app.post("/register",
  [
    check('email')
    .isEmail()
    .withMessage(
      `please use correct email`
    )
  ],
  postUserRegistration
);

app.get("/login", isUserLoggedIn, getLoginPage);
app.post("/login", postUserLogin);

//post the snippet inside the database

app.get("/profile", getProfile);

app.get("/logout", getLogout);



app.post("/", (req, res) => {
  console.log(`this is the request from the client`, req.body);
  // User.create
  User.create({
      user_name: req.body.username
    })
    .then(() => res.redirect("/"))
    .catch(error => console.error(`couldnt create user: ${error.stack}`));
});

app.post("/", (req, res) => {
  console.log(`this is the request from the client`, req.body);
  // snippet.create
  Snippets.create({
      snippet_name: req.body.language
    })
    .then(() => res.redirect("/"))
    .catch(error =>
      console.error(`could not add language homie: ${error.stack}`)
    );
});




/* Start server & Run db */
connector
  .sync()
  .then(() => {
    app.listen(port, () => console.log(`I've got ears on port: ${port}`));
  })
  .catch(error => console.error(`Couldn't sync with database: ${error.stack}`));