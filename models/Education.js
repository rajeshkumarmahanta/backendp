const mongoose = require('mongoose');

const EduSchema = mongoose.Schema({
    name:String,
    passedYear:String,
    bgColor:String,
    collegeName:String,
    updatedAt:{
        type:Date,
        default:Date.now()
    }
});

const eduModel = mongoose.model("education",EduSchema);

module.exports = eduModel
