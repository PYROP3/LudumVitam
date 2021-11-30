
const winston = require('winston');

// Winston setup
module.exports.logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log`
      // - Write all logs error (and below) to `error.log`.
      //
        new winston.transports.File({ filename: __dirname + '/error.log', level: 'error' }),
        new winston.transports.File({ filename: __dirname + '/combined.log' })
    ]
});

  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  //
//if (serverUtils.isLocalEnvironment) {
    module.exports.logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
//}

module.exports.logger.debug("Process environment type is " + process.env.NODE_ENV);