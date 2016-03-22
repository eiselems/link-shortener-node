'use strict';

var Links = require('../models/shortlink.js');
var shortid = require('shortid');


function LinkHandler () {

	this.getLink = function (req, res) {
		console.log("getLink");
		console.log(req.params.id);
		Links
			.findOne({ 'short': req.params.id }, { '_id': false, 'full': true, 'short': true })
			.exec(function (err, result) {
				if (err) { throw err; }
				console.log(result);
				if(result) {
					res.json(result);	
				}else{
					res.send("No link with this id");	
				};
				
			});
	};

	this.addLink = function (req, res) {
		Links
			.findOne({ 'full': req.params.id }, {'_id': false, '__v': false})
			.exec(function (err, result) {
					if (err) { throw err; }
					if(result){
						console.log(result);
						res.json(result);	
					}else{
						var newLink = new Links();
						var shortID =  shortid.generate();
						newLink.short = shortID;
						newLink.full = req.params.id;
						newLink.save(function (err) {
							if (err) {
								throw err;
							}
	
							res.json(newLink);
							console.log(newLink)
						});
					}
					
				}
			);
	};

}

module.exports = LinkHandler;
