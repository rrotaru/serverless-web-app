.type = 'add'
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
