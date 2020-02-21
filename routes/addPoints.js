var data = require("../assignments.json");

exports.addPoints = function(req, res) {    
	
	var pointsToAdd = parseInt(req.params.id);
	data.totalPoints += pointsToAdd;
	data.currPoints += pointsToAdd;
	console.log(data.currPoints);
	
	res.render('index', data)
}