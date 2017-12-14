var express = require('express'),
    bodyParser = require('body-parser'),
    headerOperations = require.main.require('./middleware/headerOperations'),
    router = express.Router()

// MIDDLEWARE THAT NEEDS TO BE APPLIED TO ALL INCOMMING COMMUNICATION
// =============================================================================
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
router.use(bodyParser.json())
// "custom" middleware example
router.use(
    // calling function in middleware form
    headerOperations.checkContentType,
    // injecting function
    function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
})

router.use('/todo', require('./todo'))
module.exports = router;
