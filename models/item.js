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
		orm.insertOne("items", cols, vals, cb);
	},
	//Update an item in the items table
	update: function(id, cb){
		var condition = "id="+id; //Create the condition
		orm.updateOne("items", {
			devoured: true
		}, condition, cb);
	}
}
//Export the model
module.exports = item;