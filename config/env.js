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
        sqs: {
            url: process.env.PROD_AWS_SQS_URL,
            urlError: process.env.PROD_AWS_SQS_URL_ERROR,
            secretKey: process.env.PROD_AWS_SQS_SECRETKEY,
            accessKey: process.env.PROD_AWS_SQS_ACCESSKEY,
            region: process.env.PROD_AWS_SQS_REGION
        },
        sns: {
            topicArn: process.env.PROD_AWS_SNS_TOPIC_ARN,
            secretKey: process.env.PROD_AWS_SNS_SECRETKEY,
            accessKey: process.env.PROD_AWS_SNS_ACCESSKEY,
            region: process.env.PROD_AWS_SNS_REGION
        }
    },
    amqp: {
        url: process.env.PROD_AMQP_URL,
        host: process.env.PROD_AMQP_HOST,
		port: process.env.PROD_AMQP_PORT,
		username: process.env.PROD_AMQP_USER,
		password: process.env.PROD_AMQP_PASS,
        exchange: process.env.PROD_AMQP_EXCHANGE,
        queue: process.env.PROD_AMQP_QUEUE,
        key: process.env.PROD_AMQP_KEY,
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
        sqs: {
            url: process.env.DEV_AWS_SQS_URL,
            urlError: process.env.DEV_AWS_SQS_URL_ERROR,
            secretKey: process.env.DEV_AWS_SQS_SECRETKEY,
            accessKey: process.env.DEV_AWS_SQS_ACCESSKEY,
            region: process.env.DEV_AWS_SQS_REGION
        },
        sns: {
            topicArn: process.env.DEV_AWS_SNS_TOPIC_ARN,
            secretKey: process.env.DEV_AWS_SNS_SECRETKEY,
            accessKey: process.env.DEV_AWS_SNS_ACCESSKEY,
            region: process.env.DEV_AWS_SNS_REGION
        }
    },
    amqp: {
        url: process.env.DEV_AMQP_URL,
        host: process.env.DEV_AMQP_HOST,
		port: process.env.DEV_AMQP_PORT,
		username: process.env.DEV_AMQP_USER,
		password: process.env.DEV_AMQP_PASS,
        exchange: process.env.DEV_AMQP_EXCHANGE,
        queue: process.env.DEV_AMQP_QUEUE,
        key: process.env.DEV_AMQP_KEY,
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
        sqs: {
            url: process.env.STAGE_AWS_SQS_URL,
            urlError: process.env.STAGE_AWS_SQS_URL_ERROR,
            secretKey: process.env.STAGE_AWS_SQS_SECRETKEY,
            accessKey: process.env.STAGE_AWS_SQS_ACCESSKEY,
            region: process.env.STAGE_AWS_SQS_REGION
        },
        sns: {
            topicArn: process.env.STAGE_AWS_SNS_TOPIC_ARN,
            secretKey: process.env.STAGE_AWS_SNS_SECRETKEY,
            accessKey: process.env.STAGE_AWS_SNS_ACCESSKEY,
            region: process.env.STAGE_AWS_SNS_REGION
        }
    },
    amqp: {
        url: process.env.STAGE_AMQP_URL,
        host: process.env.STAGE_AMQP_HOST,
		port: process.env.STAGE_AMQP_PORT,
		username: process.env.STAGE_AMQP_USER,
		password: process.env.STAGE_AMQP_PASS,
        exchange: process.env.STAGE_AMQP_EXCHANGE,
        queue: process.env.STAGE_AMQP_QUEUE,
        key: process.env.STAGE_AMQP_KEY,
    }
};


const config = {
    prod,
    dev,
    stg
};

module.exports = config[env];