require('dotenv').config()
require('./config/log')
// const consumer = require('./components/aws/consumer')
// const pool = require('./config/pool')

const rbp = require('./components/rabbitmq/producer')
const rbc = require('./components/rabbitmq/consumer')

async function start () {
    if(process.argv[2] === 'rabbit-consumer') {
        rbc.consume()
    } else if(process.argv[2] === 'rabbit-producer') {
        rbp.send({
            teste: "teste2"
        })
    }
    
    // await pool.init()
    // consumer.init()
} 

start()