const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dealerSchema = new Schema ({
    Name:String,
    Ci:Number,
    Phone:Number,
    Vehicle: [{
        type: Schema.Types.ObjectId,
        ref: 'vehicle'
    }]

});

module.exports = mongoose.model('dealer', dealerSchema);