var express = require('express');

// function checking for content-type header
function checkMessageContentType(req, res, next) {
    // first check that there is a content type header
    if(!req.headers['content-type']){
        console.log('No content type header present') // placeholder code
        next();
    } else if (req.headers['content-type'].search(new RegExp('application', 'i'))){
        console.log('application present in content type') // placeholder code
        next();
    } else if (req.headers['content-type'].search(new RegExp('json', 'i'))){
        console.log('json present in content type') // placeholder code
        next();
    } else if (req.headers['content-type'].search(new RegExp('multipart', 'i'))){
        console.log('multipart present in content type') // placeholder code
        next();
    } else {
        console.log('Unknown header type') // placeholder code
        next();
    }
};

// setup to work as function or middleware
function checkMongoIdParameter(MongoId) {
    return checkMongoIdParameter[MongoId] || (checkMongoIdParameter[MongoId] = function(req, res, next) {
        var checkResult = RegExp("^[0-9a-fA-F]{24}$");
        if(checkResult.test(req.params[MongoId])){
              next();
        } else{
          throw new Error('Error with ID format for: '+MongoId);
        };
    });
}

// EXP[ORTING FUNCTIONS WE WANT TO MAKE AVAILABLE
// =============================================================================
module.exports = {checkMessageContentType};
