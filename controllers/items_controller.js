//Import express and store the router
var express = require("express");
var router = express.Router();
//Import the item model
var Item = require("../models/item.js");

//======================================
//Server routes the application will use
//======================================

//GET method to display the homepage
router.get("/", function(req, res){
	Item.find({}, function(error, data){
		// Log any errors
    	if (error) {
      		console.log(error);
   		}
		//Create object for handlebars to use
		else{
			var hbsObject = {
				items: data
			};
			//Display index.handlebars, pass into it the hbsObject
			res.render("index", hbsObject); 
		}
	});
});

//POST method to insert an entry into the database
router.post("/insert", function(req, res){
	var item = new Item(req.body);

	item.save(function(error, doc){
		if(error){
			res.status(500).send(error);
		}
		res.redirect("/");
	});
});

//POST method that updated an item
router.post("/update", function(req, res){
	console.log(req.body.item_id);
	Item.findOneAndUpdate({"_id": req.body.item_id},{$set:{"devoured":true}}, function(err, doc){
		res.redirect("/");
	});
});

//Export the router
module.exports = router;