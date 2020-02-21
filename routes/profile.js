var data = require("../assignments.json");

exports.view = function(req, res){
  res.render('profile', data);
};
