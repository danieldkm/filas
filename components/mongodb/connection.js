const mongoose = require('mongoose')
const { mongodb } = require('../../config/env')
const log = require('log4js').getLogger()
module.exports = {
    connect: () => {
        return new Promise(async (resolve, reject) => {
            try {   
                
                const db = mongoose.connection
                // const Schema = mongoose.Schema
                mongoose.connect(mongodb.url, { useNewUrlParser: true, useUnifiedTopology: true })
                .then(() => {
                    log.debug('connection with mongodb success!')
                    // const pontoDataSchema = new Schema({  
                    //     nome: {type: String, required: true},  
                    //     email: String,  
                    //     telefone: String  
                    // }, {collection: 'pontos'});
                    // const Pontos = mongoose.model('Pontos',pontoDataSchema)

                    // var data = new Pontos({
                    //     nome: "Daniel",
                    //     email: "daniel.morita@kroton.com.br",
                    //     telefone: "43999999999"
                    // })
                    // data.save();
                    // log.debug(Pontos)
                    return resolve(db)
                }).catch((e) => {
                    log.error(`connection with mongodb error! ${e}`)
                    return reject(e)
                })
                
            } catch (e) {
                log.error(e)
                reject(e)
            }
        })
    }
}