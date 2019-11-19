const db = require('../config/pool');
const SalaDigital = require('../components/salaDigital/salaDigital')
const salaDigitalService = require('../components/salaDigital/salaDigitalService')

async function init() {
    await db.init()

    // var salaDigital = new SalaDigital()
    // salaDigital.cancelado = 'N'
    // salaDigital.usuario_log_id = 1
    // salaDigitalService.insert(salaDigital).then((msg) => {
    //     console.log('inserido com sucesso', msg)
    // }).catch((err) => {
    //     console.error('erro ao tentar inserir', err)
    // })

    // salaDigital.id = 12
    // salaDigital.cancelado = 'S'
    // salaDigitalService.update(salaDigital).then((msg) => {
    //     console.log('atualizado com sucesso', msg)
    // }).catch((err) => {
    //     console.error('erro ao tentar atualizar', err)
    // })


    // salaDigitalService.findAll().then((msg) => {
    //     console.log('busca', msg)
    // }).catch((err) => {
    //     console.error('erro ao tentar buscar', err)
    // })

    // console.log('salaDigital1',salaDigital)
    // salaDigital.cancelado = 'N'
    // console.log('salaDigital2',salaDigital)
    // salaDigital.id = 1
    // if(salaDigital.id) {
    //     console.log('id',salaDigital.id)
    // }
    await db.init()
}

init()