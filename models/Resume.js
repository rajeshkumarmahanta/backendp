const mongoose = require('mongoose');

const resumeSchema = mongoose.Schema({
    resume:{
        type:String,
        default:"resumeRajesh.pdf"
    }
});

const resumeModel = mongoose.model("resume",resumeSchema);

module.exports = resumeModel
