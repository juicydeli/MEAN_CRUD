var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
router.get('/templates/form', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname + '/templates/form.html'));
});
*/
module.exports = router;
