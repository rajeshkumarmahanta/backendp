
  const messageModel = require("../models/Message");
const handleMessageGet = async(req,res)=>{
    try {
        let messageUsers = await messageModel.find();
        res.send(messageUsers);
      } catch (error) {
        res.send(error);
      }
}
const handleMessageDelete = async(req,res)=>{
    try {
        let deletedUsers = await messageModel.deleteOne({ _id: req.params.id });
        res.send(true);
      } catch (error) {
        res.send(error);
      }
}
const handleMessageCreate = async(req,res)=>{
    try {

        const { name, email, message } = req.body;
        const transporter = nodemailer.createTransport({
          service:"gmail",
           auth: {
             user: "scripyking612@gmail.com",
             pass: "eyxcufsnvzexxndx",
           },
         });
           transporter.sendMail({
             from: process.env.MAIL_FROM,
             to: process.env.MAIL_TO,
             subject: `Message from ${name}`,
             text: `name : ${name},\n email : ${email} \n message : ${message}`
           });
        let messageUser = await messageModel.create({ name, email, message });
        res.send(true);
      } catch (error) {
        res.send(error);
      }
    
    
}
module.exports = {
    handleMessageGet,
    handleMessageDelete,
    handleMessageCreate
}
