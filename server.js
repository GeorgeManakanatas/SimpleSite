// main file

// BASIC SETUP
// =============================================================================
var express = require('express'),
    http = require('http'),
    path = require('path'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    events = require('events'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    fs = require('fs');

var app = express();
var fs, configurationFile;
// reading and parsing the information in the config file. dynamic selection depending on the NODE_ENV that we set
var configurationFile = require.main.require('./config/configuration.js').get(process.env.NODE_ENV);

var configuration = JSON.parse(fs.readFileSync(configurationFile));
// DATABASE SETUP
// set the database port
var port = process.env.PORT || configuration.databasePort;
//connect to local mongodb database
mongoose.connect(configuration.databaseConnection);
var db = mongoose.connection;
// inform on connection fail
db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
        console.log('Conntected To Mongo Database');
    });

// CONFIGURATION
// =============================================================================

app.use(express.static(__dirname + '/frontEnd'));               // set the static files location /frontEnd/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// DATABASE MODELS
// =============================================================================
var Todo = require('./backEnd/models/todoModel');

// ROUTES
// =============================================================================
// backe end routes
app.use(require('./backEnd/routeControllers'))
// front end routes
app.get('*', function(req, res) {
        res.sendfile('./frontEnd/mainPage/index.html');
    });

// START THE SERVER
// =============================================================================
var server = app.listen(port, 'localhost',function () {
   var host = server.address().address
   console.log("App listening at http://%s:%s", host, port)
});

//
// =============================================================================
