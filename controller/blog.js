const blogModel = require("../models/Blog");
const handleAboutUpdate = async(req,res)=>{
    try {
        const { title, description } = req.body;
        let updatedText = await aboutModel.updateOne(
          { _id: req.params.id },
          { $set: { title, description } }
        );
        res.send(updatedText);
      } catch (err) {
        res.send(err);
      }
}
const handleBlogGet = async(req,res)=>{
    try {
        let blogs = await blogModel.find();
        res.send(blogs);
      } catch (error) {
        res.send(error);
      }
}
const handleBlogCreate = async(req,res)=>{
    try {
        const { blogTitle, blogDesc, blogImage } = req.body;
        let existBlog = await blogModel.findOne({ title: blogTitle });
        // console.log(existBlog)
        if (!existBlog) {
          let createdBlog = await blogModel.create({
            title: blogTitle,
            description: blogDesc,
            imageUrl: blogImage,
          });
          res.send(createdBlog);
        } else {
          res.send("blogAlreadyExist");
        }
      } catch (err) {
        res.send(err);
      }
}
const handleBlogGetSingle = async(req,res)=>{
    try {
        let singleBlogs = await blogModel.findOne({ _id: req.params.id });
        res.send(singleBlogs);
      } catch (error) {
        res.send(error);
      }
}
const handleBlogUpdate = async(req,res)=>{
    try {
        const { blogTitle, blogDesc, blogImage } = req.body;
        let updatedBlog = await blogModel.updateOne(
          { _id: req.params.id },
          { $set: { title: blogTitle, description: blogDesc, imageUrl: blogImage } }
        );
        res.send(updatedBlog);
      } catch (error) {
        res.send(error);
      }
}
const handleBlogDelete = async(req,res)=>{
    try {
        let deletedBlog = await blogModel.deleteOne({ _id: req.params.id });
        res.send(deletedBlog);
      } catch (error) {
        res.send(error);
      }
}
module.exports = {
    handleBlogCreate,
    handleBlogGet,
    handleBlogGetSingle,
    handleBlogUpdate,
    handleBlogDelete
}
