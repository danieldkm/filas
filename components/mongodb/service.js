const log = require('log4js').getLogger()
const Pontos = require('./ponto')
module.exports = {

    deletaAll: () => {
        return new Promise(async (resolve, reject) => {
			try {
                await Pontos.deleteMany({})
                // .then(() => {
                //     log.info('deletado com sucesso')
                // }).catch((e) => {
                //     log.error(e)
                //     return reject(e)
                // });
                resolve(true)
			} catch(e) {
				reject(e)
			}
		})
    }
}