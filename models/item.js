//Import the ORM
var orm = require("../config/orm.js");

//Create the item model
var item = {
	//Grab all items from the items table
	all: function(){
		orm.selectAll("items");
	},
	//Insert an item into the items table
	insert: function(cols, vals){
		orm.insertOne("items", cols, vals);
	},
	//Update an item in the items table
	update: function(objColVals, condition){
		orm.updateOne("items", objColVals, condition);
	}
}
//Export the model
module.exports = item;