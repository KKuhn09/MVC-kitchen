//Import mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Create the item model that will interact with the database
var ItemSchema = new Schema({
	item_name:{
		type: String,
		required:true
	},
	devoured:{
		type: Boolean,
		default: false,
		required: true
	}
});
//Export the model
module.exports = mongoose.model('Item', ItemSchema);