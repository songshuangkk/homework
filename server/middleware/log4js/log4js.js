
import * as logger from 'log4js';

logger.configure(__dirname + '/config.json', {"absolute": true});

module.exports = logger;
