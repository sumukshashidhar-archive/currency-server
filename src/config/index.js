require('dotenv').config()

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';


export default {

    // PORT for running our application
    PORT: parseInt(process.env.PORT, 10),

    // Database URL to the Hosted Database
    DB_URL: process.env.MONGO_URI,


    // JSON WebToken Configuration
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_ALGORITHM: process.env.JWT_ALGORITHM,

    // logging
    logs: {
        level: process.env.LOG_LEVEL || 'silly'
    },

    // api configuration

    api: {
        prefix: '/api'
    }
}


