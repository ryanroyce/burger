// setting up the mysql connection
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "s0znzigqvfehvff5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ah2dhhpgbnb4tggu",
  password: "t0pby8uis0w6qjvz",
  database: "ujjoz42hcksxfu8y"
});

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "ryanminor",
//   password: "limabean13",
//   database: "burgers_db"
// });

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
