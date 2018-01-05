var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',function(req,res){
  res.send('You are on the login page');
});

router.get('/logout',function(req,res){
  res.send('Your are on the logout page');
});

router.get('/polls',function(req,res){
  res.send('You are on the polls page');
});

router.get('/user',function(req,res,next){
  res.send('You are on the user page');
});

module.exports = router;
