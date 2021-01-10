// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  insert: function(cols, vals, cb) {
    orm.insert("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(cols, vals, condition, cb) {
    orm.update("burgers", cols, vals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;