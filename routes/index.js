
/*
 * GET home page.
 */

var url = require('url');
querystring = require("querystring");


exports.index = function(req, res){
  res.render('index', { title: 'Hack13App - Twitter analytics to know more about technology usage' });
};



exports.list = function(req, res){
  res.send("respond with a resource");
};


exports.search = function(req, res){
  var query_string = req.url.replace('/search?', '');
  var queryObject = querystring.parse(query_string);
  console.log(queryObject)
  console.log(queryObject.tech);
  console.log(queryObject.loc)
  
  var tech = queryObject.tech;
  var loc = queryObject.loc;
  
  res.render('search', { title: 'Search Result' , SearchTech: tech , SearchLoc: loc });
};