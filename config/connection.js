//Require mysql
var mysql = require('mysql');
//Create mysql connection to the burgers_db
var connection = mysql.createConnection({
	port: 3306,
	host: "us-cdbr-iron-east-05.cleardb.net",
	user: "b6ed3d46319565",
	password: "7626cfec",
	database: "heroku_600c1df2718bcc7"
});
//Connect to the database
connection.connect(function(err){
	if(err) throw err;
	console.log("Connected to kitchen_db as id "+connection.threadId);
});
//Export the connection for the orm
module.exports = connection;