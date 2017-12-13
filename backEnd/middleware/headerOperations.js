var express = require('express');

// function checking for content-type header
function checkContentType(req, res, next) {
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

// EXP[ORTING FUNCTIONS WE WANT TO MAKE AVAILABLE
// =============================================================================
module.exports = {checkContentType};
