var data = require("../assignments.json");

exports.removedAssignment = function(req, res) {    
	var assignmentID = req.params.id;
	var completeOrRemove = req.params.corr;

	if(completeOrRemove == "complete"){
		data.recent.push(data.assignments[assignmentID-1])
		data.recent[data.recent.length-1].id = data.recent.length;
	}

	data.assignments.splice(assignmentID-1,1);

	var listLen = data.assignments.length;
	
	for (var i = 0; i < listLen; i++){
		data.assignments[i].id = i + 1;
	}
	
	res.render('index', data)
}