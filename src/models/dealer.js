const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dealerSchema = new Schema ({
    Name:String,
    Ci:Number,
    Phone:Number,
    LicensePlate:String,
    TypeOfVehicle:String

});

module.exports = mongoose.model('Dealer', dealerSchema);