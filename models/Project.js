const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
   title:String,
   description:String,
   url:String,
   technology:{
    type:[String]
   }
});

const projectModel = mongoose.model("project",projectSchema);

module.exports = projectModel
