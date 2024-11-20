const mongoose = require('mongoose');

const aboutSchema = mongoose.Schema({
    title:String,
    description:String,
    updatedAt:{
        type:Date,
        default:Date.now()
    }
});

const aboutModel = mongoose.model("about",aboutSchema);

module.exports = aboutModel
