const eduModel = require("../models/Education");

const handleEducationCreate = async(req,res)=>{
    try {
        const { educationName, collegeName, passedYear, eduBgColor } = req.body;
        let hasEdu = await eduModel.findOne({ name: educationName });
        if (!hasEdu) {
          let education = await eduModel.create({
            name: educationName,
            passedYear: passedYear,
            bgColor: eduBgColor,
            collegeName: collegeName,
          });
          res.send(educationName);
        } else {
          res.send("eduAlreadyExist");
        }
      } catch (err) {
        res.send(err);
      }
}
const handleEducationGet = async(req,res)=>{
    try {
        let education = await eduModel.find();
        res.send(education);
      } catch (err) {
        res.send(err);
      }
}
const handleSingleEducationGet = async(req,res)=>{
    try {
        let singleEdu = await eduModel.findOne({ _id: req.params.id });
        res.send(singleEdu);
      } catch (err) {
        res.send(err);
      }
}
const handleEducationUpdate = async(req,res)=>{
    try {
        const { educationName, collegeName, passedYear, eduBgColor } = req.body;
        let updatedEdu = await eduModel.updateOne(
          { _id: req.params.id },
          {
            $set: {
              name: educationName,
              passedYear: passedYear,
              bgColor: eduBgColor,
              collegeName: collegeName,
            },
          }
        );
        res.send(updatedEdu);
      } catch (err) {
        res.send(err);
      }
}
const handleEducationDelete = async(req,res)=>{
    try {
        let deletedEdu = await eduModel.deleteOne({ _id: req.params.id });
        res.send(deletedEdu);
      } catch (err) {
        res.send(err);
      }
}
module.exports = {
    handleEducationCreate,
    handleEducationGet,
    handleSingleEducationGet,
    handleEducationUpdate,
    handleEducationDelete
}
