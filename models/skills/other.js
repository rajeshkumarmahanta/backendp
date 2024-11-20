const mongoose = require('mongoose');

const otherSchema = mongoose.Schema({
    name:String,
    description:String,
    bgColor:String,
    percent:String,
    updatedAt:{
        type:Date,
        default:Date.now()
    }
});

const otherModel = mongoose.model("other",otherSchema);

module.exports = otherModel
