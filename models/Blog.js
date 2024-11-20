const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
   title:String,
   description:String,
   imageUrl:String,
   updatedAt:{
    type:Date,
    default:Date.now()
}
});

const blogModel = mongoose.model("blog",blogSchema);

module.exports = blogModel
