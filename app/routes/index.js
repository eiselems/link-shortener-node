'use strict';

var path = process.cwd();
var LinkHandler = require(path + '/app/controllers/linkHandler.server.js');

module.exports = function (app) {

	var linkHandler = new LinkHandler();

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/api/:id')
		.get(linkHandler.getLink)
		.post(linkHandler.addLink);
};
