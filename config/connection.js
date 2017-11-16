//Require mysql
var mysql = require('mysql');
//Create mysql connection to the burgers_db
var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "JjKk88!7",
	database: "kitchen_db"
});
//Connect to the database
connection.connect(function(err){
	if(err) throw err;
	console.log("Connected to kitchen_db as id "+connection.threadId);
});
//Export the connection for the orm
module.exports = connection;