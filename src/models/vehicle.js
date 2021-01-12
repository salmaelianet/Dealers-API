const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema ({
    Tipo:String,
    LicensePlate:String,
    Brand:String,
    Model:String,
    Owner:{
        type: Schema.Types.ObjectId,
        ref: 'dealer'
    }
});

module.exports = mongoose.model('vehicle', vehicleSchema);