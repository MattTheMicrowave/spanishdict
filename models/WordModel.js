var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wordSchema = new Schema({
	'ing' : String,
	'esp' : String
});



module.exports = mongoose.model('Word', wordSchema);
