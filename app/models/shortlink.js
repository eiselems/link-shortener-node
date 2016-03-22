'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShortLink = new Schema({
	short: String,
	full: String
	
});

module.exports = mongoose.model('ShortLink', ShortLink);
