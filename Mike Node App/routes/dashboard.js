
/*
 * GET home page.
 */

exports.dashboard = function(req, res){
  res.render('dashboard', { title: 'Dashboard - AdvertEyes.me' })
};