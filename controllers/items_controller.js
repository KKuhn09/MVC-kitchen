//Import express and store the router
var express = require("express");
var router = express.Router();
//Import the item model
var item = require("../models/item.js");

//======================================
//Server routes the application will use
//======================================

//GET method to display the homepage
router.get("/", function(req, res){
	item.all(function(data){
		//Create object for handlebars to use
		var hbsObject = {
			items: data
		};
		//Display index.handlebars, pass into it the hbsObject
		res.render("index", hbsObject); 
	});
});

//POST method to insert an entry into the database
router.post("/insert", function(req, res){
	item.insert("item_name", req.body.item_name, function(result){
		res.redirect("/"); //Refresh the page with the new item
	});
});

//POST method that updated an item
router.post("/update", function(req, res){
	item.update(req.body.item_id, function(result){
		res.redirect("/"); //Refresh page with updated item
	});
});

//Export the router
module.exports = router;