const mongoose = require('mongoose');

const frontendSchema = mongoose.Schema({
    name:String,
    description:String,
    bgColor:String,
    percent:String,
    updatedAt:{
        type:Date,
        default:Date.now()
    }
});

const frontendModel = mongoose.model("frontend",frontendSchema);

module.exports = frontendModel
