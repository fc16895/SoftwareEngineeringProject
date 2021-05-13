const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Link = require('../../link');

mongoose.set('useCreateIndex', true);
/* var url = 'mongodb://localhost:27017/goose';
mongoose.connect(url); */

router.post('/', function (req, res) {
  res.header("Content-Type",'application/json');
    var newLink = new Link({
        name: req.body.name,
        imagePath: req.body.imagePath,
		rating: req.body.rating
    });
    newLink.save(function (err) {
        if (err) {
            res.send({ error: err });
        } else {
			console.log(`done `);
            res.send({ message: 'done', Link: newLink });
        }
    });
});

module.exports = router;