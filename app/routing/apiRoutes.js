var allFriends = require('../data/friends.js');
var path = require('path');

// -------- ROUTING --------- //

module.exports = function (app) {

	app.get('/api/friends', function (req, res) {
		res.json(allFriends);
	});

	app.post('/api/friends' function (req, res) {
		allFriends.push(req.body);
	});

};