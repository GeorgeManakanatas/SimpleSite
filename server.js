// main file

// BASIC SETUP
// =============================================================================
var express = require('express'),
    http = require('http'),
    path = require('path'),
    mongoose = require('mongoose'),
    events = require('events'),
    bodyParser = require('body-parser'),
    fs = require('fs')

var app = express();
var fs, configurationFile;
// reading and parsing the information in the config file
configurationFile = 'configuration.json';
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

// ROUTES
// =============================================================================
app.use(require('./backEnd/routeControllers'))

// START THE SERVER
// =============================================================================
var server = app.listen(port, 'localhost',function () {
   var host = server.address().address
   console.log("App listening at http://%s:%s", host, port)
});

//
// =============================================================================
