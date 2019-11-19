const { Consumer } = require('sqs-consumer');
const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-west-2'
});

const app = Consumer.create({
    queueUrl: 'https://sqs.us-west-2.amazonaws.com/580020012056/colaborar-notify-discipline-created',
    handleMessage: async (message) => {
        return new Promise(function resolvePromise(resolve, reject) {
            try {
                console.log('unit test')
                return resolve("ok")
            } catch(err) {
                return reject(err)//new Error('DEU RUIM!')
            }
        })
    },
    sqs: new AWS.SQS()
});

app.on('error', (err) => {
    console.error('error',err.message);
});

app.on('processing_error', (err, message) => {
    console.error('processing_error', err);
    console.error('processing_error.message', message);
});

app.on('timeout_error', (err) => {
    console.error('timeout_error',err.message);
});

app.on('message_processed', (message) => {
    console.log('message_processed', message);
});

app.on('message_received', (message) => {
    console.log('message_received', message);
});

app.on('response_processed', () => {
    console.log('response_processed');
});

app.on('stopped', () => {
    console.log('stopped');
});

app.on('empty', () => {
    console.log('empty');
});

async function init() {
    console.log('init')
    await app.start()
}

module.exports = { init }
