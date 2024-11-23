const galleryModel = require("../models/Gallery");
const handleGalleryGet = async(req,res)=>{
    try {
        let images = await galleryModel.find();
        res.send(images);
      } catch (error) {
        res.send(error);
      }
}
const handleGalleryDelete = async(req,res)=>{
    try {
        let images = await galleryModel.deleteOne({ _id: req.params.id });
        res.send(true);
      } catch (error) {
        res.send(error);
      }
}
const handleGalleryCreate = async(req,res)=>{
    try {
        let image = await galleryModel.create({
          title: req.body.title,
          image: req.file.filename,
        });
        res.send(true);
      } catch (error) {
        res.send(error);
      }
}
module.exports = {
    handleGalleryGet,
    handleGalleryDelete,
    handleGalleryCreate
}
