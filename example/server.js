var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Oath = require('../oath-server')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/app')));

var oath = new Oath(http, '/'); //req.originalUrl);
app.get('/', function (req, res) {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve('PROMISE RESOLVED!');
        }, 6000);
    });
    oath.send(promise);
    console.log('Client connected')
    res.render('index', { title: 'Oath Example' });
});

http.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

