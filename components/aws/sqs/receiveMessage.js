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
var sqs = new AWS.SQS();//{apiVersion: '2012-11-05'}

var queueURL =      "https://sqs.us-east-1.amazonaws.com/580020012056/colaborar-notify-discipline-created";
var queueERRORURL = "https://sqs.us-east-1.amazonaws.com/580020012056/colaborar-notify-discipline-created-error";

var params = {
    AttributeNames: [
        "SentTimestamp"
    ],
    MaxNumberOfMessages: 10,
    MessageAttributeNames: [
        "All"
    ],
    QueueUrl: queueERRORURL,
    VisibilityTimeout: 20,
    WaitTimeSeconds: 0
};

sqs.receiveMessage(params, function(err, data) {
    if (err) {
        console.log("Receive Error", err);
    } else if (data.Messages) {
        console.log('messages', data.Messages)
        var deleteParams = {
            QueueUrl: queueURL,
            ReceiptHandle: data.Messages[0].ReceiptHandle
        };
        // sqs.deleteMessage(deleteParams, function(err, data) {
        // if (err) {
        //     console.log("Delete Error", err);
        // } else {
        //     console.log("Message Deleted", data);
        // }
        // });
    }
});
