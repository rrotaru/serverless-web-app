var AWS = require('aws-sdk');

exports.handler = function(event, context) {
    var cloudsearchdomain = new AWS.CloudSearchDomain({endpoint: 'doc-dev-cinch-accounts-ltmqj5gt5mjb5hg5eyqaf2v5hu.us-east-1.cloudsearch.amazonaws.com'});

    var documents = event.Records.map(function(record) {
        var data = {id : record.dynamodb.Keys.id.S};

        if (record.eventName === 'REMOVE') {
            data.type = 'delete'
        } else {
            var image = record.dynamodb.NewImage;

            data.type = 'add'
            data.fields = {
                name : image.name.S,
                username : image.username.S,
                email : image.email.S
            };
        }

        return data;
    });

    var params = {contentType: 'application/json', documents : JSON.stringify(documents) };
    console.log('uploading documents to cloudsearch domain', params);
    cloudsearchdomain.uploadDocuments(params, function(err, data) {
        if(err) {
            console.log('Error uploading documents to cloudsearch', err, err.stack);
            context.fail(err);
        } else {
            context.succeed("Successfully processed " + event.Records.length + " records.");
        }
    });
};
