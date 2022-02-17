const mongoose = require("mongoose");

const meterSchema = new mongoose.Schema({
    meter_number:{
        type: Number,
        required:true,
        minlength:[6,"The meter number is invalid"],
        length:[6,"meter number is invalid"]
    },
    days:{
        type:Number,
        required:true
    }

})

module.exports.Meter = mongoose.model("Meter", meterSchema);