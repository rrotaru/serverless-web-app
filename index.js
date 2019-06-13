const express = require('express');
var request = require('request-promise');

var app = express();

const port = 80
app.get('/',(requests,response) => {
            //callLambdaAPI();
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


function callLambdaAPI()
{
    var options= {
        insecure: true,
        uri: 'https://elq9dooyng.execute-api.us-east-1.amazonaws.com/test/test  ',
        rejectUnauthorized: false
    }
    request(options)
                .then(function (res) {
                     console.log(res);
    });
}
