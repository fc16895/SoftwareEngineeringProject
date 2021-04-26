const express = require('express');
const router = express.Router();

/* GET api listing. */
router.post('/:name', function (req, res) {
  res.header("Content-Type",'application/json');
  var name = req.params.name.toUpperCase();

    Link.find({ name: name.toUpperCase() }, function (err, links) {
        if (err) {
            res.send({ message: 'error' });
            return;
        }

        var aLink = links[0];

        aLink.rating = req.body.rating;

        aLink.save(function (err, data) {
            if (err) {
                res.send({ message: 'error' });
                return;
            }

            console.log(`done ${data}`);
            res.send({ message: 'done', data: aLink });
        });
    }); 
});

module.exports = router;