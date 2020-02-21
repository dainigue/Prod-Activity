
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var login = require('./routes/login');
var index = require('./routes/index');
var recent = require('./routes/recent')
var profile = require('./routes/profile');
var redeem = require('./routes/redeem');
var add = require('./routes/add');

//var assignment = require('./routes/assignment');
var added = require('./routes/added');
var removed = require('./routes/removed');
var addPoints = require('./routes/addPoints');
var json = require('./routes/json');


// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./views'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', login.view);
app.get('/index', index.view);
app.get('/recent', recent.view);
app.get('/profile', profile.view);
app.get('/redeem', redeem.view)
app.get('/add', add.view);

//app.get('/assignment/:id', assignment.assignmentInfo);
app.get('/added', added.addAssignment);
app.post('/removed/:id/:corr', removed.removedAssignment);
app.post('/addPoints/:id', addPoints.addPoints);
app.get('/json', json.showContents);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
