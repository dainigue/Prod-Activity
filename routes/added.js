var data = require("../assignments.json");

exports.addAssignment = function(req, res){
	var alistLen = data.assignments.length;
	var newAssignment = {"id" : alistLen + 1,
						"course": req.query.course,
 						"title": req.query.title,
 						"date": req.query.duedate,
 						"description": req.query.description,
 						"color": req.query.color,
 						"points": req.query.points
 					    };
 	data.assignments.push(newAssignment)
	res.render('index', data);
}