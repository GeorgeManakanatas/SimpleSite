// main file

// BASIC SETUP
// =============================================================================
var express = require('express'),
    cors = require('cors'),
    http = require('http'),
    https = require('https'),
    path = require('path'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    events = require('events'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    fs = require('fs');

// reading and parsing the information in the config file. dynamic selection depending on the NODE_ENV that we set
var configurationParams = require.main.require('./config/configuration.js').get(process.env.NODE_ENV);
// var configuration = JSON.parse(fs.readFileSync(configurationFile));
//
var app = express();
// MONGO DATA BASE SETUP
// =============================================================================
// needed when using mongoose because default promise lib is dpreciated
mongoose.Promise = global.Promise;
// build database connection string ex:"mongodb://userName:passWord@127.0.0.1:27017/clientdb
// no username and password being used
var databaseConnectionString = configurationParams.database+configurationParams.databaseLocation+":"+configurationParams.databasePort+"/"+configurationParams.databaseName;
// with username and pass word
// var databaseConnection = configurationParams.database+configurationParams.databaseUser+":"+configurationParams.databasePassword+"@"+configurationParams.databaseLocation+":"+configurationParams.databasePort+"/"+configurationParams.databaseName;

//connect to mongo database
mongoose.connect(databaseConnectionString, function(err) {
  if (err) {
    // if error trying to connect
    console.error('Failed to connect to mongo');
  }
  if (!err) {
    // if no error connection made
    console.log('Successfully connected to MongoDB');
  }
});

// connect to db
connectToDatabase(function(databaseFlag){

});
// start the server
startTheServer(function(serverFlag){

});

// CONFIGURATION
// =============================================================================
app.use(passport.initialize());
app.use(require('./backEnd/routeControllers'));
// app.use(express.static(__dirname + '/frontEnd'));               // set the static files location /frontEnd/img will be /img for users
// app.use(morgan('dev'));                                         // log every request to the console
// app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
// app.use(bodyParser.json());                                     // parse application/json
// app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
// app.use(methodOverride());


// ROUTES
// =============================================================================
// backe end routes
app.use(require('./backEnd/routeControllers'))
// front end routes
app.get('*', function(req, res) {
        res.sendfile('./frontEnd/mainPage/index.html');
    });

// CONNECT TO DB
// =============================================================================
function connectToDatabase(callback){
  // needed when using mongoose because default promise lib is dpreciated
  mongoose.Promise = global.Promise;
  // build database connection string ex:"mongodb://userName:passWord@127.0.0.1:27017/clientdb
  // no username and password being used
  var databaseConnectionString = configurationParams.database+configurationParams.databaseLocation+":"+configurationParams.databasePort+"/"+configurationParams.databaseName;
  // with username and pass word
  // var databaseConnection = configurationParams.database+configurationParams.databaseUser+":"+configurationParams.databasePassword+"@"+configurationParams.databaseLocation+":"+configurationParams.databasePort+"/"+configurationParams.databaseName;

  //connect to mongo database
  mongoose.connect(databaseConnectionString, function(err) {
    if (err) {
      // if error trying to connect
      console.error('Failed to connect to mongo');
      callback(true);
    }
    if (!err) {
      // if no error connection made
      console.log('Successfully connected to MongoDB');
      callback(false);
    }
  });
};


// START THE SERVER
// =============================================================================
function startTheServer(callback){
  // console.log('starting the server')
  // set our port
  var port = configurationParams.serverPort;
  // set the server address
  var address = configurationParams.serverAddress;
  // server if Transport Layer Security in config is true then https else default to http
  if(configurationParams.TransportLayerSecurity){
      // Settings the options for Transport Layer Security
      var options = {
          key : fs.readFileSync('./back_end/???/???.key'),
          cert : fs.readFileSync('./back_end/???/???.crt')
      };
      // starting the server with https
      var server = https.createServer(options,app);

  } else {
    // starting the server with http
    var server = http.createServer(app);
    // start server listening to port
    server.listen(port);
    // checking if the server is listening
    server.on('listening', function(){
      console.log('Listening to ', port);
      callback(true);
    });
    // checking if there is an error
    server.on('error', function(err){
      console.log(err);
      callback(false);
    });
  };

};

//
// =============================================================================
