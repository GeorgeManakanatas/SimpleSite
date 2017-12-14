// var configuration = require('../config/configuration.js').get(process.env.NODE_ENV);

var config = {
  productionBackEnd: {
    "serverPort" : "8081",
    "serverAddress" : "127.0.0.1",
    "TransportLayerSecurity" : false,
    "databaseUser" : "admin",
    "databasePassword" : "admin",
    "database" : "mongodb://",
    "databaseLocation" : "127.0.0.1",
    "databasePort" : "27017",
    "databaseName" : "siteDatabase"
  },
  developmentBackEnd: {
    "serverPort" : "8081",
    "serverAddress" : "127.0.0.1",
    "TransportLayerSecurity" : false,
    "databaseUser" : "admin",
    "databasePassword" : "admin",
    "database" : "mongodb://",
    "databaseLocation" : "127.0.0.1",
    "databasePort" : "27017",
    "databaseName" : "siteDevelopmentDatabase"
  },
  testingBackEnd: {
    "serverPort" : "8082",
    "serverAddress" : "127.0.0.1",
    "TransportLayerSecurity" : false,
    "databaseUser" : "admin",
    "databasePassword" : "admin",
    "database" : "mongodb://",
    "databaseLocation" : "127.0.0.1",
    "databasePort" : "27017",
    "databaseName" : "siteTestingDatabase"
  },
  default: {
    "serverPort" : "8081",
    "serverAddress" : "127.0.0.1",
    "TransportLayerSecurity" : false,
    "databaseUser" : "admin",
    "databasePassword" : "admin",
    "database" : "mongodb://",
    "databaseLocation" : "127.0.0.1",
    "databasePort" : "27017",
    "databaseName" : "siteDevelopmentDatabase"
  }
};

exports.get = function get(env) {
  return config[env] || config.default;
}
