const adminModel = require("../models/admin");
const bcrypt = require("bcrypt");

const handleAdminLogin = async(req,res)=>{
    const { username, password } = req.body;
    let admin = await adminModel.findOne({ username: username });
    bcrypt.compare(password, admin.password, function (err, result) {
      if (result) {
        res.send(true);
      } else {
        res.send(false);
      }
    });
}
module.exports = {
    handleAdminLogin
}
