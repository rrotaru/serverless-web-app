var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
var dynamodb = new AWS.DynamoDB();


exports.handler = async (event) => {
    // TODO implement
    getDataFromDynamoDB().then(function(done) {
        console.log(done);
    })
    const response = {
        statusCode: 200,
        body: JSON.stringify(""),
    };
    return response;
};



function getDataFromDynamoDB()
{

    var params = {
        TableName: "paastrami-articles",
        Key: {
          'name': {S: 'test'}
        },
        ProjectionExpression: 'name'
       };
    return new Promise(function(res,rej) {
        dynamodb.getItem(params, function (err, data) {
            if (err) {
                console.log(err, err.stack); // an error occurred
                rej('err');
            } 
            else   {
                console.log(data);
                res("asd");
            }  
          });
    });
    
}