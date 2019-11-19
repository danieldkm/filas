const env = process.env.NODE_ENV; // 'dev' or 'stg' or 'prod'

const prod = {
    app: {
        port: process.env.PROD_PORT
    },
    db: {
        host: process.env.PROD_DB_HOST,
        port: process.env.PROD_DB_PORT,
        user: process.env.PROD_DB_USER,
        pass: process.env.PROD_DB_PASS,
        strc: process.env.PROD_DB_STRC
    },
    aws: {
        url: process.env.PROD_AWS_SQS_URL,
        urlError: process.env.PROD_AWS_SQS_URL_ERROR,
        secretKey: process.env.PROD_AWS_SQS_SECRETKEY,
        accessKey: process.env.PROD_AWS_SQS_ACCESSKEY,
        region: process.env.PROD_AWS_SQS_REGION
    },
    rabbit: {
        url: process.env.PROD_RABBITMQ_URL,
        exchange: process.env.PROD_RABBITMQ_EXCHANGE,
        queue: process.env.PROD_RABBITMQ_QUEUE,
        key: process.env.PROD_RABBITMQ_KEY,
    }
};

const dev = {
    app: {
        port: process.env.DEV_PORT
    },
    db: {
        host: process.env.DEV_DB_HOST,
        port: process.env.DEV_DB_PORT,
        user: process.env.DEV_DB_USER,
        pass: process.env.DEV_DB_PASS,
        strc: process.env.DEV_DB_STRC
    },
    aws: {
        url: process.env.DEV_AWS_SQS_URL,
        urlError: process.env.DEV_AWS_SQS_URL_ERROR,
        secretKey: process.env.DEV_AWS_SQS_SECRETKEY,
        accessKey: process.env.DEV_AWS_SQS_ACCESSKEY,
        region: process.env.DEV_AWS_SQS_REGION
    },
    rabbit: {
        url: process.env.DEV_RABBITMQ_URL,
        exchange: process.env.DEV_RABBITMQ_EXCHANGE,
        queue: process.env.DEV_RABBITMQ_QUEUE,
        key: process.env.DEV_RABBITMQ_KEY,
    },
    mongodb: {
        url: process.env.MONGO_CONNECTION,
    }
};

const stg = {
    app: {
        port: process.env.STAGE_PORT
    },
    db: {
        host: process.env.STAGE_DB_HOST,
        port: process.env.STAGE_DB_PORT,
        user: process.env.STAGE_DB_USER,
        pass: process.env.STAGE_DB_PASS,
        strc: process.env.STAGE_DB_STRC
    },
    aws: {
        url: process.env.STAGE_AWS_SQS_URL,
        urlError: process.env.STAGE_AWS_SQS_URL_ERROR,
        secretKey: process.env.STAGE_AWS_SQS_SECRETKEY,
        accessKey: process.env.STAGE_AWS_SQS_ACCESSKEY,
        region: process.env.STAGE_AWS_SQS_REGION
    },
    rabbit: {
        url: process.env.STAGE_RABBITMQ_URL,
        exchange: process.env.STAGE_RABBITMQ_EXCHANGE,
        queue: process.env.STAGE_RABBITMQ_QUEUE,
        key: process.env.STAGE_RABBITMQ_KEY,
    }
};


const config = {
    prod,
    dev,
    stg
};

module.exports = config[env];