// imports the mysql connection from connection.js
const connection = require("../config/connection.js");

// this is the ORM where we will define the methods that will interact with our model in burger.js
const orm = {
    selectWhere: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      },

};







// exports the ORM for burger.js
module.exports = orm;
