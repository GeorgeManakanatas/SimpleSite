// var configuration = require('../config/configuration.js').get(process.env.NODE_ENV);
var config = {
  productionFrontEnd: {
    "serverPort" : "8080",
    "serverAddress" : "127.0.0.1"
  },
  developmentFrontEnd: {
    "serverPort" : "8080",
    "serverAddress" : "127.0.0.1"
  },
  testingFrontEnd: {
    "serverPort" : "8080",
    "serverAddress" : "127.0.0.1"
  },
  default: {
    "serverPort" : "8080",
    "serverAddress" : "127.0.0.1"
  }
};

exports.get = function get(env) {
  return config[env] || config.default;
}
