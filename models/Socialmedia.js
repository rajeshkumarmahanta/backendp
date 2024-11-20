const mongoose = require('mongoose');

const socialSchema = mongoose.Schema({
    facebook:String,
    instagram:String,
    github:String,
    linkedin:String,
    twitter:String,
    updatedAt:{
        type:Date,
        default:Date.now()
    }
});

const socialModel = mongoose.model("socialMedia",socialSchema);

module.exports = socialModel
