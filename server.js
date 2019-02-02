// require express, handlebars and methodOverride
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

// connect to the port or port 8080
const PORT = process.env.PORT || 8080;

// with the help of Phils pseudocode I found that methodOverride is a great package that helps do PUT and DELETE requests where they normally aren't allowed to be made
// In this case, I use this in my handlebars
const methodOverride = require("method-override");
// middleware for methodOverride
app.use(methodOverride('_method'));

// Provides static content for the app from the "public" folder
app.use(express.static("public"));

// Parses the apps body as JSON format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware for handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Imports routes and gives them access to the server
const router = require("./controllers/burgersController.js");
app.use(router);

// starts the server
app.listen(PORT, () =>{
  // console log to make sure the app is connected
  console.log("Server listening on: http://localhost:" + PORT);
});