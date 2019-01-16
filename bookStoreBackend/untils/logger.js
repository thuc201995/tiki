const winston = require("winston");
const config = require("../config/config");
const path = require("path");
const files = new winston.transports.File({
  filename: path.join(__dirname, `../log/${config.logger.file_name}.log`)
});
const consoles = new winston.transports.Console();

const logger = winston.createLogger({
  level: 0,
  transports: [files, consoles]
});

module.exports = logger;
