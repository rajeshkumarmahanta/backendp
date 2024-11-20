const mongoose = require('mongoose');

const gallerySchema = mongoose.Schema({
    title:String,
    image:{
        type:String,
        default:"default.jpg"
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
});

const galleryModel = mongoose.model("gallery",gallerySchema);

module.exports = galleryModel
