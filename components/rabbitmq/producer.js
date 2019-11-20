const amqp = require('amqplib/callback_api')
const {rabbit} = require('../../config/env')
const log = require('log4js').getLogger()
module.exports = {
    send: function(payload) {
        amqp.connect(rabbit.url, function (error0, connection) {
            try {
                if (error0) {
                    throw error0;
                }
                connection.createChannel(function (error1, channel) {
                    try{
                        if (error1) {
                            throw error1;
                        }
                        channel.assertExchange(rabbit.exchange, 'topic', { durable: true });
                        channel.assertQueue(rabbit.queue, { durable: true });
                        channel.sendToQueue(rabbit.queue, Buffer.from(JSON.stringify(payload)), {persistent: true});
                        // channel.publish(rabbit.exchange, rabbit.key, Buffer.from(JSON.stringify(payload)));
                    } catch(e) {
                        log.error(e)
                    } finally {
                        setTimeout(function () {
                            connection.close();
                        }, 500);
                    }
                });
            } catch(e) {
                log.error(e)
            }
        });
    }
}