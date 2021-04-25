const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const Link = require('./link');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var url = 'mongodb://localhost:27017/goose';
mongoose.connect(url);

app.use(express.static(path.join(__dirname,'dist/CauseVisualiser')));

app.post('/new', function (req, res) {
    var newLink = new Link({
        name: req.body.name,
        url: req.body.url
    });

    newLink.save(function (err) {
        if (err) {
            res.send({ error: err });
        } else {
            res.send({ message: 'done', Link: newLink });
        }
    });
});


app.get('/all', function (req, res) {
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
});

app.get('*',(req,res)=> {
	res.sendFile(path.join(__dirname,'dist/CauseVisualiser/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port',port);

const server = http.createServer(app);

server.listen(port, ()=> console.log(`API running on localhost:${port}`));

