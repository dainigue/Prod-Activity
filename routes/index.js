
/*
 * GET home page.
 */
var data = require('../assignments.json');

exports.view = function(req, res){
	console.log(data);
  res.render('index', data);
};
