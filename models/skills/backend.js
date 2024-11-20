const mongoose = require('mongoose');

const backendSchema = mongoose.Schema({
    name:String,
    description:String,
    bgColor:String,
    percent:String,
    updatedAt:{
        type:Date,
        default:Date.now()
    }
});

const backendModel = mongoose.model("backend",backendSchema);

module.exports = backendModel
