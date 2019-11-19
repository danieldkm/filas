require('dotenv').config()
require('./config/log')
// const consumer = require('./components/aws/consumer')
// const pool = require('./config/pool')

const rbp = require('./components/rabbitmq/producer')
const rbc = require('./components/rabbitmq/consumer')

const connectMongo = require('./components/mongodb/connection')
const Pontos = require('./components/mongodb/model')



async function start () {
    if(process.argv[2] === 'rabbit-consumer') {
        rbc.consume()
    } else if(process.argv[2] === 'rabbit-producer') {
        rbp.send({
            teste: "teste2"
        })
    } else if(process.argv[2] === 'mongodb') {
        const conn = await connectMongo.teste();
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
    }
    // await pool.init()
    // consumer.init()
} 

start()