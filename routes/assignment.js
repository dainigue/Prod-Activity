var data = require("../assignments.json");

exports.assignmentInfo = function(req, res){
	var assignmentID = req.params.id;
 	var assignment = data.assignments[assignmentID-1];
	res.json(assignment);
}