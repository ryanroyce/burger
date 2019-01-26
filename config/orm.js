// imports the mysql connection from connection.js
const connection = require("../config/connection.js");

// before we write the orm we need to write a function that will go through a loop and push a question mark to the end of an array and converts into a string
function printQuestionMarks(num) {
    let arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }
  
  // We also need to write a function that converts an object into mysql
  function objToSql(ob) {
    // empty array just like the question marks function
    let arr = [];
    // this will loop through keys then push the key/value as a string into the array
    for (var key in ob) {
      let value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if a string with spaces then add quotes 
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            // adding a single quote to either side of the value
            value = "'" + value + "'";
        }
        // push key=value to the end of the array
        arr.push(key + "=" + value);
      }
    }
    // then turn the array of strings into one string with commas in between each value
    return arr.toString();
  }
// this is the ORM where we will define the methods that will interact with. our model in burger.js
// we did this in the cats activity week 14 activity 17
const orm = {
    // the first method that we are going to write is selectAll
    selectAll: (tableInput, cb) =>{
        let queryString = "SELECT * FROM " + tableInput + ";";
        // with the connection to mysql pass result through the call back (cb) function
        connection.query(queryString, (err, result) =>{
            // check for errors
            if (err) {
            throw err;
          }
        //   pass the results through the cb AKA callback function
          cb(result);
        });
      },
    //then we write insertOne
      insertOne: (table, cols, vals, cb) =>{    
        // concatenate the queryString variable to make it readable instead of putting it in one line
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        // console.log to make sure the inserted input strings shows up
        console.log(queryString);
        // with the connection to mysql pass result through the call back (cb) function
        connection.query(queryString, vals, (err, result) =>{
            // check for errors
            if (err) {
            throw err;
          }
          //   pass the results through the cb AKA callback function
          cb(result);
        });
      },
    //   the last method we need for burger.js is going to be the updateOne method
      updateOne: (table, objColVals, condition, cb) =>{
        // concatenate the queryString variable to make it readable instead of putting it in one line
        let queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
            
        // console.log to make sure the updated input strings shows up
        console.log(queryString);
        // with the connection to mysql pass result through the call back (cb) function
        connection.query(queryString, (err, result) =>{
            // check for errors
            if (err) {
            throw err;
          }
          //   pass the results through the cb AKA callback function
          cb(result);
        });
      }
};

// exports the ORM for burger.js
module.exports = orm;
