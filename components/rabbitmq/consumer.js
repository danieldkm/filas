const amqp = require('amqplib/callback_api')
const { amqp } = require('../../config/env')
const log = require('log4js').getLogger()
// https://www.rabbitmq.com/tutorials/tutorial-five-javascript.html
// https://www.rabbitmq.com/tutorials/tutorial-four-javascript.html
module.exports = {
	initWorkerAgendamento : () => {
		var stringConnection = 'amqp://'+amqp.username+':'+amqp.password+'@'+amqp.url+':'+amqp.port;
		try{
			amqp.connect(stringConnection, function (err, conn) {
				if(conn){
					conn.createChannel(function (err, ch) {
						var q = amqp.queue;
					
						ch.assertQueue(q);
						log.info('[*] Waiting for messages in %s. To exit press CTRL+C', q);
						try{
							ch.consume(q, function (msg) {
								log.info('[x] Received %s', msg.content);
								provaService.carregaProva(JSON.parse(msg.content));
							}, { noAck: true });
						}catch(e){
							log.error('Erro ao processar mensagem na fila: ' + q);
						}
					});
				}else if(err){
					log.error(err);
				}
			});
		}catch(e){
			log.error('Erro ao conectar no rabbit. Error: ', e);
		}
	}
};