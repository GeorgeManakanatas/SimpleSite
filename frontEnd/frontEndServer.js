// no idea what use this is going to be if any.

// BASIC SETUP
// =============================================================================
var express = require('express'),
    cors = require('cors'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    fs = require('fs');

// reading and parsing the information in the config file. dynamic selection depending on the NODE_ENV that we set
var frontEndConfigParams = require.main.require('./config/configuration.js').get(process.env.NODE_ENV);
// var configuration = JSON.parse(fs.readFileSync(configurationFile));
//
var app = express();

// start the server
startTheServer(function(serverFlag){

});

// CONFIGURATION
// =============================================================================
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json

// START THE SERVER
// =============================================================================
function startTheServer(callback){
  //console.log('starting the server')
  // set our port
  var port = frontEndConfigParams.serverPort;
  // set the server address
  var address = frontEndConfigParams.serverAddress;
  // starting the server with http
  var server = http.createServer(app);
  // start server listening to port
  server.listen(port);
  // checking if the server is listening
  server.on('listening', function(){
    console.log('Server listening to ', port);
    callback(true);
  });
  // checking if there is an error
  server.on('error', function(err){
    console.log('Error starting the server ',err);
    callback(false);
  });


};

//
// =============================================================================
