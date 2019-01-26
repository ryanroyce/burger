// setting up the mysql connection
const mysql = require("mysql");

// connect to mysql with the template that was used in the Cats activity week 14 activity 17
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "",
  password: "",
  database: "burgers_db"
});

// Make connection.
connection.connect((err) =>{
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
