/*
 * GET search logic.
 */

exports.search = function(req, res){
  res.render('search', { title: 'Search Result' });
};