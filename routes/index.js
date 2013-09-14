
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Hack13App - Twitter analytics to know more about technology usage' });
};

exports.search = function(req, res){
  res.render('search', { title: 'Search Result' });
};

exports.list = function(req, res){
  res.send("respond with a resource");
};
