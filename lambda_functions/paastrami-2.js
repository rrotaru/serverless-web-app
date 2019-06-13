const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();
exports.handler = (event, context, callback) => {
//https://badnomyand.execute-api.us-east-1.amazonaws.com/Prod
console.log(JSON.stringify(event))
var params = {
  TableName: "paastrami-articles"
 };
 dynamodb.scan(params).eachPage((err, data, done) => {
    if (data != null) {
        for (let index = 0; index < data.Items.length; index++) {
            const element = data.Items[index];
            count++;
            console.log(JSON.stringify(element));
        }
    }
    done();
    
});
}