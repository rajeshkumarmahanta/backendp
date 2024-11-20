const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    name:String,
    email:String,
    message:String,
    updatedAt:{
        type:Date,
        default:Date.now()
    }
});

const messageModel = mongoose.model("message",messageSchema);

module.exports = messageModel
