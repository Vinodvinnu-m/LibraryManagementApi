let env = require('dotenv');
    env.config();

let AppConfigObj = {
    serverDetails:{
        port: process.env.PORT || 8080
    },
    mongoDbDetails:{
        dbConnectionString:process.env.CONNECTION_STRING || "mongodb://localhost:27017/LibraryManagement"
    }
}


module.exports = AppConfigObj