// import express and express.router from server.js
var express = require("express");
var router = express.Router();

// render the home page that connects index.handlebars
router.get("/", (req, res) =>{
      res.render("index");
    });

// exports the routes for server.js to use.
module.exports = router;