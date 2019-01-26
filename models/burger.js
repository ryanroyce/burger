// first we import the orm
const orm = require("../config/orm.js");

// based on the orm model we insert the mysql statements from the burgers table
// once again, the cats activity was very helpful with this in week 14 activity 17
let burger = {
  selectAll: (cb) =>{
    orm.selectAll("burgers", (res) =>{
      cb(res);
    });
  },
  insertOne: (cols, vals, cb) =>{
    orm.insertOne("burgers", cols, vals, (res) =>{
      cb(res);
    });
  },
  updateOne: (objColVals, condition, cb) =>{
    orm.updateOne("burgers", objColVals, condition, (res) =>{
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
