'use strict';
require('dotenv').config();

const express = require('express');
var request = require('request-promise');
var bodyparser = require('body-parser');
var app = express();
var router = express.Router();

const port = 80

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
                             console.log(res);
                             response.send('CODE A THON!' + JSON.parse(res).body);
            });
                
})

app.listen(port, () => {
    console.log("running on port " + port);     
})

// Default request handler
app.use((req, res) => {
    res.end("404 not found");
});

module.exports = app;