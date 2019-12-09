require('dotenv').config()
require('./config/log')
const sns = require('./components/aws/sns/sns')

function init() {
    sns.publish("teste")
}

init()