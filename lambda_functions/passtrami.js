const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();
exports.handler = (event, context, callback) => {
//https://badnomyand.execute-api.us-east-1.amazonaws.com/Prod
console.log(JSON.stringify(event))
var params = {
  ExpressionAttributeValues: {
   ":a": {
     S: "Rob"
    }
  }, 
  FilterExpression: "labels = :a",
  TableName: "paastrami-articles"
 };
 dynamodb.scan(params, function(err, data) {
   if (err) 
   {
        const response = {
            status: 400,
            message:data
        }
        console.log("Error while getting data from Dynamo db table " + err);
        callback(err,null);
    }
   else     
   {
       console.log("succesful retrieval of the data" + data);           // successful response
       callback(null,data);
   }
 });
    
};