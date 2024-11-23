const backendModel = require("../../models/skills/backend");

const handleBackendCreate = async(req,res)=>{
    try {
        const { backendRangeValue, BgColorbackend, BSkillName, BSkillDesc } =
          req.body;
        const hasSkill = await backendModel.findOne({ name: BSkillName });
        if (!hasSkill) {
          let backend = await backendModel.create({
            name: BSkillName,
            description: BSkillDesc,
            bgColor: BgColorbackend,
            percent: backendRangeValue,
          });
          res.send(true);
        } else {
          res.send("skillAlreadyExist");
        }
      } catch (err) {
        res.send(false);
      }
}
const handleBackendGet = async(req,res)=>{
    try {
        let backend = await backendModel.find();
        res.send(backend);
      } catch (err) {
        res.send(err);
      }
}
const handleBackendGetSingle = async(req,res)=>{
    try {
        let singlebackend = await backendModel.findOne({ _id: req.params.id });
        res.send(singlebackend);
      } catch (err) {
        res.send(err);
      }
}
const handleBackendUpdate = async(req,res)=>{
    try {
        const { backendRangeValue, BgColorbackend, BSkillName, BSkillDesc } =
          req.body;
        let updatedBackend = await backendModel.updateOne(
          { _id: req.params.id },
          {
            $set: {
              name: BSkillName,
              description: BSkillDesc,
              percent: backendRangeValue,
              bgColor: BgColorbackend,
            },
          }
        );
        res.send(updatedBackend);
      } catch (err) {
        res.send(err);
      }
}
const handleBackendDelete = async(req,res)=>{
    try {
        let deletedBackend = await backendModel.deleteOne({ _id: req.params.id });
        res.send(deletedBackend);
      } catch (err) {
        res.send(err);
      }
}
module.exports = {
    handleBackendCreate,
    handleBackendGet,
    handleBackendGetSingle,
    handleBackendUpdate,
    handleBackendDelete
}
