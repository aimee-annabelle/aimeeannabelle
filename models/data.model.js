const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    amount:{
        type:String,
        required:true
    },
    meter_number:{
        type: Number,
        required:true,
        minlength:[6,"The meter number is invalid"],
        length:[6,"meter number is invalid"]
    },
    token:{
        type:String,
        length: 8
    }

})

module.exports.Data = mongoose.model("Data", dataSchema);
