var express = require('express'),
    bodyParser = require('body-parser'),
    messageHeaderChecks = require.main.require('./middleware/preProcessingChecks/messageHeaderChecks'),
    adminRoute = require('./admin')
    registerRoute = require('./register'),
    loginRoute = require('./login'),
    guestRoute = require('./guest'),
    reservationRoute = require('./reservation'),
    housingUnitRoute = require('./housingUnit'),
    router = express.Router()
    // node env variable dependent configuration file
var configuration = require.main.require('./back_end/config/configuration.js').get(process.env.NODE_ENV);
// =============================================================================
// MIDDLEWARE THAT NEEDS TO BE APPLIED TO ALL INCOMMING COMMUNICATION
// =============================================================================
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
router.use(bodyParser.json())
// "custom" middleware example
router.use(
    // calling function in middleware form
    messageHeaderChecks.checkMessageContentType,
    // injecting function
    function(req, res, next) {
      // log to console
      console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
    }
);

// RESERVATION
// =============================================================================
router.use('/housingUnit',
        // middleware

        housingUnitRoute);

// HOUSING UNIT
// =============================================================================
router.use('/reservation',
        // middleware

        reservationRoute);

// GUEST
// =============================================================================
router.use('/guest',
        // middleware

        guestRoute);

// LOGIN AND REGISTER
// =============================================================================
router.use('/register',
        // middleware

        registerRoute);

router.use('/login',
      // middleware

      loginRoute);

// ADMIN
// =============================================================================
router.use('/admin',
        // middleware

        adminRoute);

module.exports = router;
