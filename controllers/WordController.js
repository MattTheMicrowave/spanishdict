var WordModel = require('../models/WordModel.js');

// WordController.js

// @ description :: server side code for managing dictionary content

module.exports = {

	// WordController.list()

	list: function (req, res) {
		WordModel.find(function (err, words) {
			return res.json(words);
		});
	},

	// WordController.show()

	show: function (req, res) {
		var id = req.params.id;
		WordModel.findOne({_id: id}, function (err, word) {
			return res.json(word);
		});
	},

	// WordController.create()

	create: function (req, res) {
		var word = new WordModel({
			ing : req.body.ing,
			esp : req.body.esp
		});

		word.save(function (err, word) {
			return res.json(word);
		});

	},

	// WordController.update()

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

	// WordController.remove()

	remove: function (req, res) {
		var id = req.params.id;
		WordModel.findByIdAndRemove(id, function (err, word) {
			return res.json(word);
		});
	}

};
