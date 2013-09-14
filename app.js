
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
 // , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var search = require('./routes/search.js')


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/search', routes.search);
app.get("*", function(request, response) {
  response.body("<h1>No found!!!!!!!!!!!</h1>")
  response.end("404!");
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
