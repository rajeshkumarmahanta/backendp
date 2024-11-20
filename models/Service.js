const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    title:String,
    description:String,
    icon:String,
    color:String,
    updatedAt:{
        type:Date,
        default:Date.now()
    }
});

const serviceModel = mongoose.model("service",serviceSchema);

module.exports = serviceModel
