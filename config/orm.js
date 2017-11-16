//Import the db connection
var connection = require("../config/connection.js");

//The orm (object-relational mapping) that will convert data between javascript and mysql
var orm = {
	//Function that will grab all the data from the items table
	selectAll: function(){
		connection.query("SELECT * FROM items;", function(err, result){
			if(err) throw err; //If there is an error
			console.log(result); //Else, log the result
		});
	},
	//Function that will insert an item into the database
	insertOne: function(userInput){
		var queryString = "INSERT INTO items(item_name) VALUES ('"+userInput+"');"; //Patch the query together
		connection.query(queryString, function(err){
			if(err) throw err;
		});
	},
	//Function that will update an entry in the database
	updateOne: function(condition){
		var queryString = "UPDATE items SET devoured=1 WHERE id="+condition";";
		connection.query(queryString, function(err){
			if(err) throw err;
		});
	}
}
//Export the orm
module.exports = orm;