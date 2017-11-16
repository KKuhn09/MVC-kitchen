//Import the db connection
var connection = require("../config/connection.js");

//Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  // For each key in the object
  for (var key in ob) {
    var value = ob[key];
    // Skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // If string with spaces, wrap in quotations 
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value); //Push the key and the value 
      // e.g. {name: 'John Doe'} => ["name='John Doe'"]
    }
  }
  return arr.toString();// Return the array as a string
}

//The ORM (Object-Relational Mapping) that will convert data between javascript and mysql
var orm = {
	//Function that will grab all entries from a table
	selectAll: function(tableName, cb){
		var queryString = "SELECT * FROM "+tableName+";"; //Patch the query together
		connection.query(queryString, function(err, result){
			if(err) throw err; //If there is an error
			cb(result); 
		});
	},
	//Function that will insert an entry into the database
	insertOne: function(tableName, cols, vals, cb){
		//Patch the query together
		var queryString = "INSERT INTO "+tableName;
			queryString += "("+cols.toString()+") ";
			queryString += "VALUES ('";
			queryString += vals;
			queryString += "') ";
		//Run the query		 
		connection.query(queryString, vals, function(err, result){
			if(err) throw err;
			cb(result);
		});
	},
	//Function that will update an entry in the database
	updateOne: function(tableName, objColVals, condition, cb){
		var queryString = "UPDATE "+tableName;
			queryString +=" SET "+objToSql(objColVals); 
			queryString +=" WHERE "+condition;
			console.log(queryString);

		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);
		});
	}
}
//Export the orm
module.exports = orm;