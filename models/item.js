//Import the ORM
var orm = require("../config/orm.js");

//Create the item model that will interact with the database
var item = {
	//Grab all items from the items table
	all: function(cb){
		orm.selectAll("items", function(res){
			cb(res);
		});
	},
	//Insert an item into the items table
	insert: function(cols, vals, cb){
		orm.insertOne("items", cols, vals);
	},
	//Update an item in the items table
	update: function(objColVals, condition, cb){
		orm.updateOne("items", objColVals, condition);
	}
}
//Export the model
module.exports = item;