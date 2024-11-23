
const frontendModel = require("../../models/skills/frontend");

const handleFrontedCreate = async(req,res)=>{
    try {
        const { frontendRangeValue, BgColorfrontend, FSkillName, FSkillDesc } =
          req.body;
        const hasSkill = await frontendModel.findOne({ name: FSkillName });
        if (!hasSkill) {
          let frontend = await frontendModel.create({
            name: FSkillName,
            description: FSkillDesc,
            bgColor: BgColorfrontend,
            percent: frontendRangeValue,
          });
          res.send(true);
        } else {
          res.send("skillAlreadyExist");
        }
      } catch (err) {
        res.send(false);
      }
}
const handleFrontendGet = async(req,res)=>{
    try {
        let frontend = await frontendModel.find();
        res.send(frontend);
      } catch (err) {
        res.send(err);
      }
}
const handleFrontendGetSingle = async(req,res)=>{
    try {
        let singlefrontend = await frontendModel.findOne({ _id: req.params.id });
        res.send(singlefrontend);
      } catch (err) {
        res.send(err);
      }
}
const handleFrontendUpdate = async(req,res)=>{
    try {
        const { frontendRangeValue, BgColorfrontend, FSkillName, FSkillDesc } =
          req.body;
        let updatedFrontend = await frontendModel.updateOne(
          { _id: req.params.id },
          {
            $set: {
              name: FSkillName,
              description: FSkillDesc,
              percent: frontendRangeValue,
              bgColor: BgColorfrontend,
            },
          }
        );
        res.send(updatedFrontend);
      } catch (err) {
        res.send(err);
      }
}
const handleFrontendDelete = async(req,res)=>{
    try {
        let deletedFrontend = await frontendModel.deleteOne({ _id: req.params.id });
        res.send(deletedFrontend);
      } catch (err) {
        res.send(err);
      }
}
module.exports = {
    handleFrontedCreate,
    handleFrontendGet,
    handleFrontendGetSingle,
    handleFrontendUpdate,
    handleFrontendDelete
}
