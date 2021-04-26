const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Link = require('../../link');
mongoose.set('useCreateIndex', true);
var url = 'mongodb://localhost:27017/goose';
mongoose.connect(url);

/* GET api listing. */
router.get('/', function (req, res) {
  res.header("Content-Type",'application/json');
    Link.find({},{_id:0,name:1,imagePath:1,rating:1}, function (err, links) {
        if (err) {
            res.send({ message: 'error' });
            return;
        }
        res.json(links);
    });
});

module.exports = router;