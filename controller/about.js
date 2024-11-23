const aboutModel = require("../models/About");

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
const handleAboutGet = async(req,res)=>{
    try {
        let about = await aboutModel.findOne();
        res.send(about);
      } catch (err) {
        res.send(err);
      }
}
module.exports = {
    handleAboutUpdate,
    handleAboutGet
}
