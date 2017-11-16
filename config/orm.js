//Import the db connection
var connection = require("../config/connection.js");

//The orm (object-relational mapping) that will convert data between javascript and mysql
var orm = {
	//Function that will grab all the data from the database
	selectAll: function(tableName){
		connection.query("SELECT * FROM items;", function(err, result){
			if(err) throw err;
			console.log(result);
		});
	},
	//Function that will insert an item into the database
	insertOne: function(){
		//Patch the query together
		var query = "INSERT INTO "
	}
}

orm.selectAll();