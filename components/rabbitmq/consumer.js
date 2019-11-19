const amqp = require('amqplib/callback_api')
const { rabbit } = require('../../config/env')
const log = require('log4js').getLogger()
// https://www.rabbitmq.com/tutorials/tutorial-five-javascript.html
// https://www.rabbitmq.com/tutorials/tutorial-four-javascript.html
module.exports = {
    consume: () => {
        amqp.connect(rabbit.url, function (error0, connection) {
            if (error0) {
                log.error(error0)
                throw error0
            }
            connection.createChannel(function (error1, channel) {
                if (error1) {
                    log.error(error1)
                    throw error1;
                }

                channel.assertExchange(rabbit.exchange, 'topic', {
                    durable: true
                });

                channel.assertQueue('', {
                    durable: true
                }, function (error2, q) {
                    if (error2) {
                        log.error(error2)
                        throw error2;
                    }
                    log.debug(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
                    // channel.bindQueue(rabbit.queue, rabbit.exchange, rabbit.key);
                    channel.consume(rabbit.queue, function (msg) {
                        if (msg.content) {
                            log.debug(" [x] %s", msg.content.toString());
                        }
                    }, {
                        noAck: true
                    });
                });
            });
        });
    }
}