const socialModel = require("../models/Socialmedia");
const handleSocialMediaGet = async(req,res)=>{
    try {
        let links = await socialModel.findOne();
        res.send(links);
      } catch (error) {
        res.send(error);
      }
}
const handleSocialMediaUpdate = async(req,res)=>{
    try {
        const { instagram, facebook, github, twitter, linkedin } = req.body;
        let updatedLinks = await socialModel.updateOne(
          { _id: req.params.id },
          {
            $set: {
              facebook: facebook,
              instagram: instagram,
              linkedin: linkedin,
              github: github,
              twitter: twitter,
            },
          }
        );
        res.send(updatedLinks);
      } catch (error) {
        res.send(error);
      }
}
module.exports = {
    handleSocialMediaGet,
    handleSocialMediaUpdate,
}
