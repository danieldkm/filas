const oracledb = require('oracledb')
const env = require('../config/env')
const log = require('log4js').getLogger()
function init() {
    log.info(env)
    return new Promise(async (resolve, reject) => {
    try {
        await oracledb.createPool({
            user: env.db.user,
            password: env.db.pass,
            connectString: env.db.strc,
            // edition: 'ORA$BASE', // used for Edition Based Redefintion
            // events: false, // whether to handle Oracle Database FAN and RLB events or support CQN
            // externalAuth: false, // whether connections should be established using External Authentication
            // homogeneous: true, // all connections in the pool have the same credentials
            // poolAlias: dbConfig.poolAlias, // set an alias to allow access to the pool via a name.
            // poolIncrement: 1, // only grow the pool by one connection at a time
            poolMax: 5, // maximum size of the pool. Increase UV_THREADPOOL_SIZE if you increase poolMax
            poolMin: 0, // start with no connections; let the pool shrink completely
            // poolPingInterval: 1, // check aliveness of connection if idle in the pool for 60 seconds
            poolTimeout: 0, // terminate connections that are idle in the pool for 60 seconds
            // queueTimeout: 600000, // terminate getConnection() calls in the queue longer than 60000 milliseconds
            // sessionCallback: myFunction, // function invoked for brand new connections or by a connection tag mismatch
            // stmtCacheSize: 30 // number of statements that are cached in the statement cache of each connection
        });
        log.info('Connection database pool started')
        return resolve()
    // await dostuff();
    } catch (err) {
        log.error(err)
        return reject(err)
    }
})
}

async function dostuff() {
    let connection;
    try {
        // Get a connection from the default pool
        connection = await oracledb.getConnection();
        // let sql = `SELECT sysdate FROM dual WHERE :b = 1`;
        // let sql = `SELECT * FROM usuario where rownum <= 1`;
        let sql = `SELECT * FROM usuario where rownum <= 1`;
        let binds = [];
        let options = {
            outFormat: oracledb.OBJECT,
            fetchInfo: {
                "CONTA": {
                    type: oracledb.STRING
                }
            }
        };

        let result = await connection.execute(sql, binds, options);
        // log.info(result);
        for (var row in result.rows) {
            console.log('row', result.rows[row])
            // log.info("row", result.rows[row].DADO)
        }
    } catch (err) {
        // log.error(err);
    } finally {
        if (connection) {
            try {
                // Put the connection back in the pool
                await connection.close();
            } catch (err) {
                // log.error(err);
            }
        }
    }
}

async function closePoolAndExit() {
    // log.info('\nTerminating');
    try {
        // Get the pool from the pool cache and close it when no
        // connections are in use, or force it closed after 10 seconds
        // If this hangs, you may need DISABLE_OOB=ON in a sqlnet.ora file
        await oracledb.getPool().close(10);
        // log.info('Pool closed');
        // process.exit(0);
    } catch (err) {
        // log.error(err.message);
        // process.exit(1);
    }
}

// process
//     .once('SIGTERM', closePoolAndExit)
//     .once('SIGINT', closePoolAndExit);

// init();

module.exports = {init}