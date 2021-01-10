// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// Create model in the variable burger
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne(id, function(res) {
      cb(res);
    });
  }
};

// Export the burger model to the burgers_controller.js
module.exports = burger;