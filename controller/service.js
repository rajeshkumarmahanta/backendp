const serviceModel = require("../models/Service");
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
const handleServiceGet = async(req,res)=>{
    try {
        const services = await serviceModel.find();
        res.send(services);
      } catch (error) {
        res.json(err);
      }
}
const handleServiceCreate = async(req,res)=>{
    try {
        const { serviceTitile, serviceDesc, serviceIcon, serviceColor } = req.body;
        let hasService = await serviceModel.findOne({ title: serviceTitile });
        if (!hasService) {
          let createdServices = await serviceModel.create({
            title: serviceTitile,
            description: serviceDesc,
            icon: serviceIcon,
            color: serviceColor,
          });
          res.send(createdServices);
        } else {
          res.send("serviceAlreadyExist");
        }
      } catch (error) {
        res.send(error);
      }
}
const handleServiceGetSingle = async(req,res)=>{
    try {
        let singleService = await serviceModel.findOne({ _id: req.params.id });
        res.send(singleService);
      } catch (error) {
        res.send(error);
      }
}
const handleServiceUpdate = async(req,res)=>{
    try {
        const { serviceTitile, serviceDesc, serviceIcon, serviceColor } = req.body;
        let updatedService = await serviceModel.updateOne(
          { _id: req.params.id },
          {
            $set: {
              title: serviceTitile,
              description: serviceDesc,
              color: serviceColor,
              icon: serviceIcon,
            },
          }
        );
        res.send(updatedService);
      } catch (err) {
        res.send(err);
      }
}
const handleServiceDelete = async(req,res)=>{
    try {
        let deletedService = await serviceModel.deleteOne({ _id: req.params.id });
        res.send(deletedService);
      } catch (err) {
        res.send(err);
      }
}
module.exports = {
    handleServiceCreate,
    handleServiceGet,
    handleServiceGetSingle,
    handleServiceUpdate,
    handleServiceDelete
}
