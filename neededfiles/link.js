var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var linkSchema = new Schema({
    name: {type: String,unique: true},
    imagePath: String,
	rating: Number
});

var Link = mongoose.model('Link', linkSchema);

module.exports = Link;