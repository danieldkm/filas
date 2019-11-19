const { Consumer } = require('sqs-consumer')
const AWS = require('aws-sdk')
const env = require('../../../config/env');
const log = require('log4js').getLogger();
// const controller = require('../salaDigital/salaDigitalController')
// const { teste } = require('../salaDigital/salaDigitalController')

AWS.config.update({
    region: env.aws.region,
    accessKeyId: env.aws.accessKey,
    secretAccessKey: env.aws.secretKey
});

const app = Consumer.create({
    queueUrl: env.aws.url,
    handleMessage: async (message) => {
        return new Promise(async (resolve, reject) => {
            try {
                log.info(message.Body)
                return resolve()
            } catch(err) {
                log.error(`receive: ${message.Body?message.Body:message}`)
                log.error(err)
                log.error('-----------------------------------------------')
                return reject(err)
            }
        })
    },
    sqs: new AWS.SQS()
});


// app.on('error', (err) => {
//     console.error('error',err.message);
// });

// app.on('processing_error', (err, message) => {
//     console.error('processing_error', err);
//     console.error('processing_error.message', message);
// });

// app.on('timeout_error', (err) => {
//     console.error('timeout_error',err.message);
// });

// app.on('message_processed', (message) => {
//     console.log('message_processed', message);
// });

// app.on('message_received', (message) => {
//     console.log('message_received', message);
// });

// app.on('response_processed', () => {
//     console.log('response_processed');
// });

// app.on('stopped', () => {
//     console.log('stopped');
// });

app.on('empty', () => {
    log.debug('queue is empty')
});


async function init() {
    log.info('Start consumer')
    app.start()
}

module.exports = { init }
