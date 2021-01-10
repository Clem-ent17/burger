var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

//Add data on the page
router.get("/", function(req, res) {
    burger.all(function(data) {
      var burgers = {
        burger: data
      };
      console.log(burgers);
      res.render("index", burgers);
    });
  });

//Add data to the page
router.post("/api/burgers", function(req, res) {
    burger.insert([
      "burger_name, devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      res.json({ id: result.insertId });
    });
});
  
//Update data on the page
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.update({devoured: req.body.devoured}, condition, function(result) {
        res.json;
      }
    );
});

module.exports = router;