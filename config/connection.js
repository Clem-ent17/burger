var mysql = require("mysql");

//Connection to the database
var connection;
if(process.env.JAWSBD_URL){
    connection = mysql.createConnection(process.env.JAWSBD_URL)
}
else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Password",
        database: "burgers_db"
      });
}

//Connection ID
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Export connection file
module.exports = connection;