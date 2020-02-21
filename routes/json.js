var data = require("../assignments.json");

exports.showContents = function(req, res){
	res.json(data);
}