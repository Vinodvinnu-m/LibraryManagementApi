const mongoose = require('mongoose');
const connectionString = require('../config/appconfig')

 let MongoConnection = async () => {
  try {
    await mongoose.connect(connectionString?.mongoDbDetails?.dbConnectionString);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Error in MongoDB Connection:", error.message);
    process.exit(1);
  }
};

module.exports = MongoConnection