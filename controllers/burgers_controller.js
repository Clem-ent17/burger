var express = require("express");
var router = express.Router()

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js")

// Create all our routes and set up logic within those routes where required.
//Add data on the page
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject)
    })    
});

//Add data to the page
router.post("/api/burgers", function(req, res) {
    console.log("req body", req.body)
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
        res.json({ id: result.insertId})
    })
});

 //Update data on the page
router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(
        req.params.id,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404)
            }
            res.status(200)
        }
    )
})

// Export routes for server.js to use.
module.exports = router