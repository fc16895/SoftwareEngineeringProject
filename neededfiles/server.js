//const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const db = require('./db');
const Link = require('./link');
const newlink = require('./server/routes/new');
const getall = require('./server/routes/all');
const update = require('./server/routes/update');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

/* var url = 'mongodb://localhost:27017/goose';
mongoose.connect(url); */

app.use(express.static(path.join(__dirname,'dist/CauseVisualiser')));
app.use('/newlink', newlink);
app.use('/getall', getall);
app.use('/update', update);

/* app.post('/newlink', function (req, res) {console.log(111);
    var newLink = new Link({
        name: req.body.name,
        imagePath: req.body.imagePath
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


app.get('/all', function (req, res) {console.log(222);
    Link.find({}, function (err, links) {
        if (err) {
            res.send({ message: 'error' });
            return;
        }
        res.send({ message: 'done', data: links });
    });
});

app.post('/update/:name', function (req, res) {
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
}); */

app.get('*',(req,res)=> {
	res.sendFile(path.join(__dirname,'dist/CauseVisualiser/index.html'));
});

const port = process.env.PORT || '9999';
app.set('port',port);

const server = http.createServer(app);

server.listen(port, ()=> console.log(`API running on localhost:${port}`));

