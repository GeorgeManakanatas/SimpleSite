var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var reservationDateSchema = new Schema({
  checkIn: {
      type: Date,
      required: [true, 'checkIn date needed for reservation']
      // validate: {
      //   validator: function(checkIn){
      //     // check that date is in the future
      //     if (){
      //       return false;
      //     } else return true;
      //   },
      //   message: 'check in date must not be in the past'
      // }
    },
  checkOut: {
      type: Date,
      required: [true, 'checkOut date needed for reservation']
      // validate: {
      //   validator: function(checkOut){
      //     // check that date is in the future
      //     if (){
      //       return false;
      //     } else return true;
      //   },
      //   message: 'check in date must not be in the past'
      // }
    }
})

var reservationPriceSchema = new Schema({
  pricingSeason: {
      type: String,
      required: [true, 'season needed for reservation'],
      validate: {
        validator: function(pricingSeason){
          // check should be moved from here made case insensitive
          if (pricingSeason === 'high' || pricingSeason === 'mid' || pricingSeason === 'low'){
            return true;
          } else return false;
        },
        message: 'incorrect season type'
      }
    },
  breakfast: {
      type: Boolean,
      required: [true, 'breakfast billing must be present']
    }
})

var otherInfoSchema = new Schema({
  numberOfGuests: {
      type: Number,
      required: [true, 'number of people staying needed'],
      default: 1,
      validate: {
        validator: function(numberOfGuests){
          // check that htey are not more than the unit will allow
          if (numberOfGuests){
            return true;
          } else return false;
        },
        message: 'too many guests'
      }
    },
  bedType: {
      type: String,
      required: [false, 'bed type not mandatory'],
      default: single,
      validate: {
        validator: function(bedType){
          // make check case insensitive and read values from config file
          if (bedType === 'single' || bedType === 'double'){
            return true;
          } else return false;
        },
        message: 'too many guests'
      }
    },
  pets: {
      type: Boolean,
      required: [true, 'pet notification needed'],
      default: true
    },
  kids: {
      type: Number,
      required: [true, 'motice must be made for children'],
      default: 0
    },
  clientInputField: {
      type: String,
      required: [false, 'client input test is optional for th ereservation']
    }
})

var reservationSchema = new Schema({
  unitNumber: {
      type: Number,
      required: [true, 'unit number needed for reservation']
    },
  clientId: {
      type: String,
      required: [true, ' needed for reservation']
    },
  reservationDate: reservationDateSchema,
  reservationPrice: reservationPriceSchema,
  otherInfo: otherInfoSchema
})

// =============================================================================
// RESERVATION MODEL ASSOCIATED FUNCTIONS
// =============================================================================

// RESERVATION SCHEMA FUNCTIONS
// =============================================================================

// RESERVATION DATE SCHEMA FUNCTIONS
// =============================================================================

// RESERVATION PRICE SCHEMA FUNCTIONS
// =============================================================================

// OTHER INFO SCHEMA FUNCTIONS
// =============================================================================


// model for using the schema created
var reservation = mongoose.model('reservations', reservationSchema);
// make this available to applications
module.exports = reservation;
