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
        res.render("index", hbsObject);
    });
});

// post method to post a new burger in the burgers to devour div 
router.post("/burgers", (req, res) => {
    // insert a new burger into burger_name column
    burger.insertOne([
        "burger_name"
    ], [
            req.body.burger_name
        ], (data) => {
            // redirect the page 
            // had some trouble with this as I was trying to 'render' the post request
            // found on stack overflow that the proper method is redirect 
            res.redirect("/");
        });
});

// put method to put a new burger in the devoured burgers div 
router.put("/burgers/:id", (req, res) => {
    // had to fix this line from my previous put method for the syntax to be correct in mysql (inserting the string of "id=" in the beginning of the id variable)
    let id = "id="+req.params.id;
    // run the updateOne function from the orm
    burger.updateOne({
        // also needed to set devoured to true so handlebars would know what list to put it in
        devoured: true
    }, id, (data) => {
        // redirect to index
        res.redirect("/");
    });
});

// exports the routes for server.js to use.
module.exports = router;