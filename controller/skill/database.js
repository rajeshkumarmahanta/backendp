const databaseModel = require("../../models/skills/database");

const handleDatabaseCreate = async(req,res)=>{
    try {
        const { databaseRangeValue, BgColordatabase, DSkillName, DSkillDesc } =
          req.body;
        const hasSkill = await databaseModel.findOne({ name: DSkillName });
        if (!hasSkill) {
          let database = await databaseModel.create({
            name: DSkillName,
            description: DSkillDesc,
            bgColor: BgColordatabase,
            percent: databaseRangeValue,
          });
          res.send(true);
        } else {
          res.send("skillAlreadyExist");
        }
      } catch (err) {
        res.send(false);
      }
}
const handleDatabaseGet = async(req,res)=>{
    try {
        let database = await databaseModel.find();
        res.send(database);
      } catch (err) {
        res.send(err);
      }
}
const handleDatabaseGetSingle = async(req,res)=>{
    try {
        let singledatabase = await databaseModel.findOne({ _id: req.params.id });
        res.send(singledatabase);
      } catch (err) {
        res.send(err);
      }
}
const handleDatabaseUpdate = async(req,res)=>{
    try {
        const { databaseRangeValue, BgColordatabase, DSkillName, DSkillDesc } =
          req.body;
        let updatedDatabase = await databaseModel.updateOne(
          { _id: req.params.id },
          {
            $set: {
              name: DSkillName,
              description: DSkillDesc,
              percent: databaseRangeValue,
              bgColor: BgColordatabase,
            },
          }
        );
        res.send(updatedDatabase);
      } catch (err) {
        res.send(err);
      }
}
const handleDatabaseDelete = async(req,res)=>{
    try {
        let deletedDatabase = await databaseModel.deleteOne({ _id: req.params.id });
        res.send(deletedDatabase);
      } catch (err) {
        res.send(err);
      }
}
module.exports = {
    handleDatabaseCreate,
    handleDatabaseGet,
    handleDatabaseGetSingle,
    handleDatabaseUpdate,
    handleDatabaseDelete
}
