// require express and handlebars
const express = require("express");
const exphbs = require("express-handlebars");
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

// Imports routes and gives them access to the server
const router = require("./controllers/burgersController.js");
app.use(router);

// starts the server
app.listen(PORT, () =>{
  // console log to make sure the app is connected
  console.log("Server listening on: http://localhost:" + PORT);
});