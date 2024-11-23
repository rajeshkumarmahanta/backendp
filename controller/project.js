const projectModel = require("../models/Project");
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
const handleProjectGet = async(req,res)=>{
    try {
        const projects = await projectModel.find();
        res.send(projects);
      } catch (error) {
        res.json(err);
      }
}
const handleProjectCreate = async(req,res)=>{
    try {
        const { projectTitle, projectDesc, projectUrl, projectTech } = req.body;
        let technologies = projectTech.split(",");
        let hasProject = await projectModel.findOne({ title: projectTitle });
        if (!hasProject) {
          let createdProject = await projectModel.create({
            title: projectTitle,
            description: projectDesc,
            url: projectUrl,
            technology: technologies,
          });
          res.send(createdProject);
        } else {
          res.send("projectAlreadyExist");
        }
      } catch (error) {
        res.send(error);
      }
}
const handleProjectGetSingle = async(req,res)=>{
    try {
        let singleProject = await projectModel.findOne({ _id: req.params.id });
        res.send(singleProject);
      } catch (error) {
        res.send(error);
      }
}
const handleProjectUpdate = async(req,res)=>{
    try {
        const { projectTitle, projectDesc, projectUrl, projectTech } = req.body;
        let technologies = projectTech.split(",");
        let updatedProject = await projectModel.updateOne(
          { _id: req.params.id },
          {
            $set: {
              title: projectTitle,
              description: projectDesc,
              url: projectUrl,
              technology: technologies,
            },
          }
        );
        res.send(updatedProject);
      } catch (err) {
        res.send(err);
      }
}
const handleProjectDelete = async(req,res)=>{
    try {
        let deletedProject = await projectModel.deleteOne({ _id: req.params.id });
        res.send(deletedProject);
      } catch (err) {
        res.send(err);
      }
}
module.exports = {
    handleProjectCreate,
    handleProjectGet,
    handleProjectGetSingle,
    handleProjectUpdate,
    handleProjectDelete
}
