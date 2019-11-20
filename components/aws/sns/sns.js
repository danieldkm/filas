const AWS = require('aws-sdk')
const { aws } = require('../../../config/env');
const log = require('log4js').getLogger();
// Set region
// log.info(aws.sns)
AWS.config.update({
    region: aws.sns.region,
    accessKeyId: aws.sns.accessKey,
    secretAccessKey: aws.sns.secretKey
});

module.exports = {
  listTopic: () => {
    var listTopicsPromise = new AWS.SNS().listTopics({}).promise();//{apiVersion: '2010-03-31'}

    // Handle promise's fulfilled/rejected states
    listTopicsPromise.then(
      function(data) {
        log.info(data.Topics);
      }).catch(
        function(err) {
          log.info(err, err.stack);
      });
  },
  publish: (payload) => {
    var params = {
        Message: JSON.stringify(payload), /* required */
        TopicArn: aws.sns.topicArn
    };
    
    // Create promise and SNS service object
    var publishTextPromise = new AWS.SNS().publish(params).promise();//{apiVersion: '2010-03-31'}
    
    // Handle promise's fulfilled/rejected states
    publishTextPromise.then(
        function(data) {
            log.info(`Message ${params.Message} send sent to the topic ${params.TopicArn}`);
            log.info("MessageID is " + data.MessageId);
        }).catch(
            function(err) {
              log.error(err, err.stack);
        });
  }
}