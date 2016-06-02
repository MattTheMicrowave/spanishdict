var express = require('express');
var router = express.Router();
var WordModel = require('../models/WordModel.js');
// var words = {};
/* GET home page. */
router.get('/', function(req, res, next) {
  WordModel.find(function(err, words) {
  res.render('index', { title: 'Express', words: words });
});
});

// router.post('/spanishdict', function(req, res, next) {
// 	var word = new WordModel({
// 		ing : req.body.ing,
// 		esp : req.body.esp
// 	});
//
// 	word.save(function(err, word) {
//
// 		res.redirect('/');
// 	});
// });
module.exports = router;
