const mongoose = require("mongoose");
const config = require("../config/config");
const connection = mongoose.connect(
  `${config.database.uri}/${config.database.database_name}`,
  { useNewUrlParser: true }
);
const logger = require("../untils/logger");

connection.then(
  db => {
    logger.info(`Successfully connected to  MongoDB.`);
    return db;
  },
  err => {
    if (err.message.code === "ETIMEDOUT") {
      logger.info("Attempting to re-establish database connection.");
      mongoose.connect(config.database.uri);
    } else {
      logger.error("Error while attempting to connect to database:");
      logger.error(err);
    }
  }
);

module.exports = connection;
