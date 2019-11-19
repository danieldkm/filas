const AWS = require('aws-sdk');
const env = require('../../../config/env');
const log = require('log4js').getLogger();
// Set the region 
AWS.config.update({
    region: env.aws.region,
    accessKeyId: env.aws.accessKey,
    secretAccessKey: env.aws.secretKey
});

// Create an SQS service object
var sqs = new AWS.SQS();

var params = {
    // DelaySeconds: 10,
    // MessageAttributes: {
    //     "Title": {
    //     DataType: "String",
    //     StringValue: "The Whistler"
    //     },
    //     "Author": {
    //     DataType: "String",
    //     StringValue: "John Grisham"
    //     },
    //     "WeeksOn": {
    //     DataType: "Number",
    //     StringValue: "6"
    //     }
    // },
    MessageBody: `{"cd_disciplina": 54, "shortname": "SHORTNAME_TEST"}`,
    QueueUrl: "https://sqs.us-east-1.amazonaws.com/580020012056/colaborar-notify-discipline-created"
};

sqs.sendMessage(params, function(err, data) {
    if (err) {
    console.log("Error", err);
    } else {
    console.log("Success", data.MessageId);
    }
});