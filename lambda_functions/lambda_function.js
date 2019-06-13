var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "paastrami-articles";

var classification = "unclassified";

var labels = "unlabeled";

var name = "testname";

var downbucks = 0;
var is_accepted = false;
var text = "i am a sample solution";
var upbucks = 1;



exports.handler = (events, context, callback) => {
var params = {
    TableName:table,
    Item:{
        "classification": events['queryStringParameters']['classification'],
        "labels": events["queryStringParameters"]['label'],
        "name": events["queryStringParameters"]['name'],
        "solution":{
            "downbucks": events["queryStringParameters"]['downbucks'],
            "is_accepted": events["queryStringParameters"]["is_accepted"],
            "text": events["queryStringParameters"]['text'],
            "upbucks:": events["queryStringParameters"]["upbucks"]
        }
    }
};    
console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err));
    } else {
        console.log("Added item:", JSON.stringify(data));
        callback(null,JSON.stringify(data))
    }
});    
    
};
