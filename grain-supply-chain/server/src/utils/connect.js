//make database connection
const mongoose = require("mongoose");
const config = require("../../config");
const logger = require("./logger");
//Houyuan
const connect = async () => { //Establish a connection with the mongodb database
  const dbUri = config.mongo.baseUrl;
  try {
    await mongoose.connect(dbUri);
    logger.info("DB connected");
  } catch (e) {
    logger.error("Could not connect to db: \n" + e);
    process.exit(1); //Fail to end the process to avoid wasting resources
  }
}

module.exports = connect;//Houyuan
