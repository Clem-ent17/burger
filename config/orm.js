// Require connection.js
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  //Display all burgers
  selectAll: function (table, cb) {
      var query = "SELECT * FROM ??";
      connection.query(query, [table], function (err, result) {
          if (err) throw err;
          cb(result);
      });
  },

  //Insert one burger
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  //update one burger
  updateOne: function(id, cb){
      var query = "UPDATE burgers SET devoured = 1 WHERE id = ?"
      connection.query(query, [id], function (err, result){
          if (err) throw err;
          cb(result)
      })
  }
}

// Export the orm object for the model (burger.js).
module.exports = orm;