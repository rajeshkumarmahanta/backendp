const homeModel = require("../models/Home");

const handleHomeUpdate = async (req,res) => {
    try {
        const { homeText } = req.body;
        let updatedText = await homeModel.updateOne(
          { _id: req.params.id },
          { $set: { homeText: homeText } }
        );
        res.send(updatedText);
      } catch (err) {
        res.send(err);
      }
};
const handleHomeGet = async (req,res) => {
    try {
        let homeData = await homeModel.findOne();
        res.send(homeData);
      } catch (err) {
        res.send(err);
      }
};

module.exports = {
    handleHomeUpdate,
    handleHomeGet
};
