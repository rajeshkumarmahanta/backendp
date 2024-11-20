const mongoose = require('mongoose');

const LFSchema = mongoose.Schema({
    name:String,
    description:String,
    bgColor:String,
    percent:String,
    updatedAt:{
        type:Date,
        default:Date.now()
    }
});

const LFModel = mongoose.model("LF",LFSchema);

module.exports = LFModel
