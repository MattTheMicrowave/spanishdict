var express = require('express');
var router = express.Router();
var WordController = require('../controllers/WordController.js');

// get

router.get('/', function (req, res) {
		WordController.list(req, res);
});

// get

router.get('/:id', function (req, res) {
		WordController.show(req, res);
});

//post

router.post('/', function(req, res) {
		WordController.create(req, res);
});

// put

router.put('/:id', function (req, res) {
		WordController.update(req, res);
});

// delete

router.delete('/:id', function (req, res) {
		WordController.remove(req, res);
});

module.exports = router;
