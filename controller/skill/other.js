const otherModel = require("../../models/skills/other");
const handleOtherCreate = async(req,res)=>{
    try {
        const {
          othertoolRangeValue,
          BgColorothertool,
          otherSkillName,
          otherSkillDesc,
        } = req.body;
        const hasSkill = await otherModel.findOne({ name: otherSkillName });
        if (!hasSkill) {
          let other = await otherModel.create({
            name: otherSkillName,
            description: otherSkillDesc,
            bgColor: BgColorothertool,
            percent: othertoolRangeValue,
          });
          res.send(true);
        } else {
          res.send("skillAlreadyExist");
        }
      } catch (err) {
        res.send(false);
      }
}
const handleOtherGet = async(req,res)=>{
    try {
        let other = await otherModel.find();
        res.send(other);
      } catch (err) {
        res.send(err);
      }
}
const handleOtherGetSingle = async(req,res)=>{
    try {
        let singleOther = await otherModel.findOne({ _id: req.params.id });
        res.send(singleOther);
      } catch (err) {
        res.send(err);
      }
}
const handleOtherUpdate = async(req,res)=>{
    try {
        const {
          othertoolRangeValue,
          BgColorothertool,
          otherSkillName,
          otherSkillDesc,
        } = req.body;
        let updatedOther = await otherModel.updateOne(
          { _id: req.params.id },
          {
            $set: {
              name: otherSkillName,
              description: otherSkillDesc,
              percent: othertoolRangeValue,
              bgColor: BgColorothertool,
            },
          }
        );
        res.send(updatedOther);
      } catch (err) {
        res.send(err);
      }
}
const handleOtherDelete = async(req,res)=>{
    try {
        let deletedOther = await otherModel.deleteOne({ _id: req.params.id });
        res.send(deletedOther);
      } catch (err) {
        res.send(err);
      }
}
module.exports = {
    handleOtherCreate,
    handleOtherGet,
    handleOtherGetSingle,
    handleOtherUpdate,
    handleOtherDelete
}
