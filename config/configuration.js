// var configuration = require('../config/configuration.js').get(process.env.NODE_ENV);

var config = {
  productionStart: {
   "databasePort" : "8081",
   "databaseConnection" : "mongodb://127.0.0.1:27017/siteDatabase"
  },
  developmentStart: {
   "databasePort" : "8081",
   "databaseConnection" : "mongodb://127.0.0.1:27017/siteDevelopmentDatabase"
  },
  testingStart: {
   "databasePort" : "8081",
   "databaseConnection" : "mongodb://127.0.0.1:27017/siteTestingDatabase"
  },
  default: {
   "databasePort" : "8081",
   "databaseConnection" : "mongodb://127.0.0.1:27017/siteDevelopmentDatabase"
  }
};

exports.get = function get(env) {
  return config[env] || config.default;
}
