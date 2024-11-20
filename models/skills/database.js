const mongoose = require('mongoose');

const databaseSchema = mongoose.Schema({
    name:String,
    description:String,
    bgColor:String,
    percent:String,
    updatedAt:{
        type:Date,
        default:Date.now()
    }
});

const databaseModel = mongoose.model("database",databaseSchema);

module.exports = databaseModel
