var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'iosproject'
});

connection.connect();
console.log("connection success");
module.exports = connection;