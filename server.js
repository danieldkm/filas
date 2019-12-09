require('dotenv').config()
require('./config/log')
// const consumer = require('./components/aws/consumer')
// const pool = require('./config/pool')

const rbp = require('./components/rabbitmq/producer')
const rbc = require('./components/rabbitmq/consumer')

const connectMongo = require('./components/mongodb/connection')
const Pontos = require('./components/mongodb/model')
const sns = require('./components/aws/sns/sns')
const serviceMongo = require('./components/mongodb/service')

async function start () {

    if(process.argv[2] === 'rabbit-consumer') {
        rbc.consume()
    } else if(process.argv[2] === 'rabbit-producer') {
        rbp.send( {type_event: 'PROVAEAD2'}
        )
    } else if(process.argv[2] === 'mongodb') {
        const conn = await connectMongo.connect();
        // console.log(conn)
        if(conn) {
            var pontos = await Pontos.find()
            console.log(pontos)
            // var data = new Pontos({
            //         nome: "Daniel",
            //         email: "daniel.morita@kroton.com.br",
            //         telefone: "43999999999"
            //     })
            // data.save()

            conn.close(function () {
                console.log('Mongoose connection disconnected');
            });
        }
    } else if(process.argv[2] === 'sns-list-topic') {
        sns.listTopic()
    } else if(process.argv[2] === 'sns-publish') {
        sns.publish({type_event: 'PROVAEAD'})
    } else if(process.argv[2] === 'mongodb-deleta-all') {
        const conn = await connectMongo.connect();
        await serviceMongo.deletaAll()
    } 
    // await pool.init()
    // consumer.init()
} 

start()