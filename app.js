'use strict';
require('dotenv').config();

const express = require('express');
var session = require('cookie-session');
var request = require('request-promise');
var bodyparser = require('body-parser');
var app = express();
var router = express.Router();

app.use(session({name: 'robs_cookie', keys: ['notasecret'], maxAge: 24 * 60 * 60 * 1000}));
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.set('views', './views');
app.set('view engine', 'pug');

app.use(require('flash')());

app.get('/',(requests,response) => {
  var options= {
    insecure: true,
    uri: 'https://elq9dooyng.execute-api.us-east-1.amazonaws.com/test/test  ',
    rejectUnauthorized: false
  }
  request(options)
    .then(function (res) {
     console.log('---------------')
     console.log(JSON.parse(res))
     response.render('home_view', {questions_list: JSON.parse(res)});
     //response.end('ok');
  });
})

// Default request handler
app.use((req, res) => {
    res.end("404 not found");
});

module.exports = app;
