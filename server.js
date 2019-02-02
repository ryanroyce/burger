// require express, handlebars and methodOverride
const express = require("express");
const exphbs = require("express-handlebars");
// with the help of Phils pseudocode I found that methodOverride is a great package that helps do PUT and DELETE requests where they normally aren't allowed to be made
// In this case, I use this in my handlebars
const methodOverride = require("method-override");

// connect to the port or port 8080
const PORT = process.env.PORT || 8080;
// holds express() in a variable to be called afterwards
const app = express();
// Provides static content for the app from the "public" folder
app.use(express.static("public"));

// Parses the apps body as JSON format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware for handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// middleware for methodOverride
app.use(methodOverride("X-HTTP-Method-Override"));

// Imports routes and gives them access to the server
const router = require("./controllers/burgersController.js");
app.use(router);

// starts the server
app.listen(PORT, () =>{
  // console log to make sure the app is connected
  console.log("Server listening on: http://localhost:" + PORT);
});