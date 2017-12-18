//Require packages
var express = require("express");
var mongoose = require("mongoose");
var dbConfig = require("./config/connection.js");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var exphbs = require("express-handlebars");

//Set up the port on either deployed port or port 3000
var port = process.env.PORT || 3000;

//Create the express app
var app = express();

//Middleware that serves our static files from the public directory
app.use(express.static("public"));
app.use(morgan("dev")); //logs every request to the console
app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride("_method")); //Override default methods

//HANDLEBARS
app.engine("handlebars", exphbs({ defaultLayout : "main" }));
app.set("view engine", "handlebars");

//MongoDB config
mongoose.Promise = Promise; //set mongoose to leverage built in JS ES6 promises
const db = mongoose.connection;
mongoose.connect(dbConfig.url);
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//Use the routes and start the app
var routes = require("./controllers/items_controller.js");
app.use("/", routes);

app.listen(port);
console.log("Listening on port " + port);