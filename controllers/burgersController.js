// import express and express.router from server.js
const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

// render the home page that connects index.handlebars
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        // creating an object that holds burgers data in it
        let hbsObject = {
            burgers: data
        };
        // console.log so when we run 'node server.js' and open the local host the table from mysql will appear
        console.log(hbsObject);
        // render index
        res.render("index");
    })
});

// exports the routes for server.js to use.
module.exports = router;