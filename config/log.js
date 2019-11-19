const log4js = require('log4js');

let logLevel;
if (process.env.NODE_ENV === 'production') {
    logLevel = 'error';
} else {
    logLevel = 'debug';
}

async function configure() {
    log4js.configure({
        appenders: {
            console: { type: 'stdout' },
            // file: { type: 'file', filename: 'api.log' }
            file: {
                type: 'multiFile',
                base: 'logs/',
                property: 'level',
                extension: '.log',
                maxLogSize: 10485760,
                backups: 5,
                compress: true
            }
        },
        categories: {
            default: { appenders: ['console', 'file'], level: logLevel }
        }
    });
}

configure();