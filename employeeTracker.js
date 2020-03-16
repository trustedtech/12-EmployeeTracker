var mysql = require("mysql");

var connection = mysql.createConnection({
  host:     process.env.HOST,
  port:     process.env.PORT,
  user:     process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as user: " + connection.threadId);
  connection.end();
});