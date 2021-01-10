// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
// Require from orm.js => var orm => All
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // Require from orm.js => var orm => create
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  // Require from orm.js => var orm => update
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
