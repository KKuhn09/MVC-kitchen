//Import express and store the router
var express = require("express");
var router = express.Router();
//Import the item model
var item = require("../models/item.js");

//======================================
//Server routes the application will use 
//======================================

//===============
//Home('/') route
//===============

//Display the homepage
router.get("/", function(req, res){
	item.all(function(data){
		//Create object for handlebars to use
		var hbsObject = {
			items: data
		};
		console.log(hbsObject);
		//Display index.handlebars, pass into it the hbsObject
		res.render("index", hbsObject); 
	});
});

module.exports = router;