var express = require('express');
var router = express.Router();
var http = require('../app').http;
var OathServer = require('../../oath-server')


/* GET home page. */
var oath = new OathServer(http, '/');

router.get('/', function(req, res, next) {
// var promise = request('http://www.google.com');
  var promise = new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve('PROMISE RESOLVED!');
    }, 6000);
  });

  oath.send(promise);
  res.render('index', { title: 'HOME' });
});

router.get('/heya', function(req, res, next) {
  res.render('index', { title: 'HEYA' });
});

module.exports = router;
