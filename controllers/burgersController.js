// import express and express.router from server.js
const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

// render the home page that connects index.handlebars
router.get("/", (req, res) =>{
      res.render("index");
    });

// exports the routes for server.js to use.
module.exports = router;