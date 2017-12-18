var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var personalInfoSchema = new Schema({
  firstName: {
      type: String,
      required: [true, 'first name needed for guest entry']
    },
  lastName: {
      type: String,
      required: [true, 'last name needed for guest entry']
    },
  phoneNumber: {
      type: String,
      required: [false, 'phone number not required for guest entry']
    },
  email: {
      type: String,
      required: [true, 'email needed for guest entry']
    }
})

var specialConditionsSchema = new Schema({
  disability: {
      type: String,
      required: [false, 'disability entry not required']
    },
  healthCondition: {
      type: String,
      required: [false, 'health condition entry not required']
    },
  allergies: {
      type: String,
      required: [true, 'allergies entry not required']
    }
})

var pastVisitsSchema = new Schema({
  checkInDate: {
      type: Date,
      required: [false, 'checkIn date is not required']
    },
  checkOutDate: {
      type: Date,
      required: [false, 'checkOut date is not required']
    },
  visitRating: {
      type: Number,
      required: [false, 'visitRating is not required'],
      validate: {
        validator: function(validate){
          // check that the rating is between one and five
          if (unitType > 1 || unitType <= 5){
            return true;
          } else return false;
        },
        message: 'visit rating must be between one and five stars'
      }
    }
})

var guestSchema = new Schema({
  username: {
      type: String,
      required: [true, 'username needed for guest entry'],
      validate: {
        validator: function(username){
            // look for guest in the database
            this.constructor.find({'username':username},function(err,guest){
                if (err){
                  throw err; // return possible error
                }
                if (guest && guest.length !== 0){
                  return false; // if guest with this username is found return false
                } else return true; // if no guest found return true
            });
        },
        message: "the username of the guest must not be taken"
      }
    },
  personalInfo: personalInfoSchema,
  specialConditions: [specialConditionsSchema],
  pastVisits: [pastVisitsSchema]
})

// =============================================================================
// GUEST MODEL ASSOCIATED FUNCTIONS
// =============================================================================

// GUEST SCHEMA FUNCTIONS
// =============================================================================

// PERSONAL INFO SCHEMA FUNCTIONS
// =============================================================================

// SPECIAL CONDITIONS SCHEMA FUNCTIONS
// =============================================================================

// PAST VISITS SCHEMA FUNCTIONS
// =============================================================================

// model for using the schema created
var guest = mongoose.model('guest', guestSchema);
// make this available to applications
module.exports = guest;
