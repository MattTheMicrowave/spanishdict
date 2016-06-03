var WordModel = require('../models/WordModel.js');
// ^^ imports the wordmodel scaffold

// WordController.js

// @ description :: server side code for managing dictionary content

module.exports = {

	// WordController.list(), this GETS all the entries from the DB

	list: function (req, res) {
		WordModel.find(function (err, words) {
			return res.json(words);
		});
	},

	// WordController.show(), this GETS a single entry by ID

	show: function (req, res) {
		var id = req.params.id;
		WordModel.findOne({_id: id}, function (err, word) {
			return res.json(word);
		});
	},

	// WordController.create(), this POSTs to the DB

	create: function (req, res) {
		var word = new WordModel({
			ing : req.body.ing,
			esp : req.body.esp
		});

		word.save(function (err, word) {
			return res.json(word);
		});

	},

	// WordController.update(), this PUTs an update to an entry in the DB

	update: function (req, res) {
		var id = req.params.id;
		WordModel.findOne({_id: id}, function (err, word) {
			word.ing = req.body.ing ? req.body.ing : ing.ing;
			word.esp = req.body.esp ? req.body.esp : esp.esp;
			word.save(function (err, word) {
				return res.json(word);
			});
		});
	},

	// WordController.remove(), this deletes a single entry in the DB

	remove: function (req, res) {
		var id = req.params.id;
		WordModel.findByIdAndRemove(id, function (err, word) {
			return res.json(word);
		});
	}

};
