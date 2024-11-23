const resumeModel = require("../models/Resume");
const fs = require("fs");
const path = require("path");
// const handleResumeUpdate = async (req,res) => {
//   try {
//     let prevResume =  await resumeModel.findOne({_id:req.params.id});
    
//     fs.unlink(`../public/images/${prevResume.resume}`,async(err)=>{
//       if(err){
//         res.send(err);
//       }else{
//         let updatedResume = await resumeModel.updateOne({_id:req.params.id},{ resume: req.file.filename });
//         res.send(true);
//       }
//     })
//   } catch (err) {
//     res.send(err);
//   }
// };
const handleResumeUpdate = async (req,res) => {
  const resumeId = req.params.id;
  const file = req.file;

  if (!file) return res.send({ error: 'No file uploaded' });

  try {
    // Find the user in the database
    const resume = await resumeModel.findById(resumeId);

    if (resume) {
      // Delete the previous resume if it exists
      if (resume.resume) {
        const oldFilePath = path.join(__dirname, 'public/images', resume.resume);
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }

      // Update the user's resume field with the new file
      resume.resume = file.filename;
      await resume.save();

      res.send(true);
    } else {
      res.send({ error: 'User not found' });
    }
  } catch (err) {
    res.send({ error: 'Internal server error', details: err.message });
  }
};
const handleResumeGet = async (req,res) => {
    try {
        let resume = await resumeModel.findOne();
        res.send(resume);
      } catch (err) {
        res.send(err);
      }
};
module.exports = {
  handleResumeUpdate,
  handleResumeGet
};
