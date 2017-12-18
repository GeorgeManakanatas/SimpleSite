var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var extraChargesSchema = new Schema({
  minibarCost: {
      type: Number,
      required: [false, 'minibar charges, not strict requirement']
    },
  snacksCost: {
      type: Number,
      required: [false, 'snack charges, not strict requirement']
    },
  breakfastCost: {
      type: Number,
      required: [true, 'breakfast charges, needed for schema']
    }
})

var uintPricingSchema = new Schema({
  _id: false,
  highSeason: {
      type: Number,
      required: [true, 'highSeason unit price is required for the schema']
    },
  midSeason: {
      type: Number,
      required: [true, 'midSeason unit price is required for the schema']
    },
  lowSeason: {
      type: Number,
      required: [true, 'lowSeason unit price is required for the schema']
    },
  extraCharges: extraChargesSchema
})

var unitMaintenanceSchema = new Schema({
  _id: false,
  // needs to be filled out 
})

var uintFeaturesSchema = new Schema({
  _id: false,
  petFriendly: {
      type: Boolean,
      required: [false, 'petFriendly feature not required'],
      default:false
    },
  wheelchairAccess: {
      type: Boolean,
      required: [false, 'wheelchairAccess feature not required'],
      default:false
    },
  balkony: {
      type: Boolean,
      required: [false, 'balkony feature not required'],
      default:false
    },
})

var housingUnitsSchema = new Schema({
  _id: {
      type: Number,
      required: [true, '_id is required for the housingUnitsSchema']
    },
  unitType: {
      type: String,
      required: [true, 'unitType is required for the housingUnitsSchema'],
      validate: {
        validator: function(unitType){
          // check should be moved from here made case insensitive and the checklist stored in a config file
          if (unitType === 'flat' || unitType === 'house'){
            return false;
          } else return true;
        },
        message: 'incorrect unit type'
      }
    },
  maxCapacty: {
      type: Number,
      required: [true, 'maxCapacty is required for the housingUnitsSchema']
      // validate: {
      //   validator: function(unitType){
      //     // max capacity is undefined for now local legal limits need to be checked
      //     if (maxCapacty > ?){
      //       return false;
      //     } else return true;
      //   },
      //   message: 'max capacity can't be higher than ', ?
      // }
    },
  uintPricing: [uintPricingSchema],
  unitMaintenance: [unitMaintenanceSchema],
  uintFeatures: [uintFeaturesSchema]
},{ collection: 'housingUnits' })

// =============================================================================
// HOUSING UNITS ASSOCIATED FUNCTIONS
// =============================================================================

// HOUSING UNITS FUNCTIONS
// =============================================================================

// UNIT PRICING SCHEMA FUNCTIONS
// =============================================================================

// UNIT MAINTENANCE SCHEMA FUNCTIONS
// =============================================================================

// UNIT FEATURES FUNCTIONS
// =============================================================================

// EXTRA CHARGES FUNCTIONS
// =============================================================================

// model for using the schema created
var housingUnits = mongoose.model('housingUnits', housingUnitsSchema);
// make this available to applications
module.exports = housingUnits;
