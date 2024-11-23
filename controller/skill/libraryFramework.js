const LFModel = require("../../models/skills/LF");

const handleLibraryFrameworkCreate = async(req,res)=>{
    try {
        const {
          LFSkillName,
          LFSkillDesc,
          BgColorlibraryFramework,
          libraryFrameworkRangeValue,
        } = req.body;
        const hasSkill = await LFModel.findOne({ name: LFSkillName });
        if (!hasSkill) {
          let LF = await LFModel.create({
            name: LFSkillName,
            description: LFSkillDesc,
            bgColor: BgColorlibraryFramework,
            percent: libraryFrameworkRangeValue,
          });
          res.send(true);
        } else {
          res.send("skillAlreadyExist");
        }
      } catch (err) {
        res.send(false);
      }
}
const handleLibraryFrameworkGet = async(req,res)=>{
    try {
        let libraryframework = await LFModel.find();
        res.send(libraryframework);
      } catch (err) {
        res.send(err);
      }
}
const handleLibraryFrameworkGetSingle = async(req,res)=>{
    try {
        let singleLF = await LFModel.findOne({ _id: req.params.id });
        res.send(singleLF);
      } catch (err) {
        res.send(err);
      }
}
const handleLibraryFrameworkUpdate = async(req,res)=>{
    try {
        const {
          LFSkillName,
          LFSkillDesc,
          BgColorlibraryFramework,
          libraryFrameworkRangeValue,
        } = req.body;
        let updatedLF = await LFModel.updateOne(
          { _id: req.params.id },
          {
            $set: {
              name: LFSkillName,
              description: LFSkillDesc,
              percent: libraryFrameworkRangeValue,
              bgColor: BgColorlibraryFramework,
            },
          }
        );
        res.send(updatedLF);
      } catch (err) {
        res.send(err);
      }
}
const handleLibraryFrameworkDelete = async(req,res)=>{
    try {
        let deletedLF = await LFModel.deleteOne({ _id: req.params.id });
        res.send(deletedLF);
      } catch (err) {
        res.send(err);
      }
}
module.exports = {
    handleLibraryFrameworkCreate,
    handleLibraryFrameworkGet,
    handleLibraryFrameworkGetSingle,
    handleLibraryFrameworkUpdate,
    handleLibraryFrameworkDelete
}
