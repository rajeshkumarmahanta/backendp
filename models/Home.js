const mongoose = require('mongoose');

const homeSchema = mongoose.Schema({
    homeText:String,
    image:{
        type:String,
        default:"default.jpg"
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
});

const homeModel = mongoose.model("home",homeSchema);

module.exports = homeModel
