/*
 * GET search logic.
 */

exports.search = function(req, res){
  
 /* var url = require('url');
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  var SearchData = query;
  console.log(query);*/
  res.render('search', { SearchData: "Hellodsjfbskdnfk " });
};