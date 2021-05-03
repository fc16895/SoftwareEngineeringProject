const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Link = require('../../link');
mongoose.set('useCreateIndex', true);
/* var url = 'mongodb://localhost:27017/goose';
mongoose.connect(url);
 */
/* GET api listing. */
router.post('/', function (req, res) {
	res.header("Content-Type",'application/json');
	var name = req.body.name;
	var aLink={$set : { rating : req.body.rating }};console.log(req.body.rating);
    Link.updateOne({ name: name },aLink, function (err, links) {
        if (err) {
            res.send({ message: 'error' });
            return;
        }

        else{
			console.log('updated');
			res.send({ message: 'done' });
		}
    }); 
});

module.exports = router;