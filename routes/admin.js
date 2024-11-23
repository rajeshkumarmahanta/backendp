const express = require("express");
const Router = express.Router();
const {handleAdminLogin} = require("../controller/admin");
Router.post("/",handleAdminLogin);

module.exports = Router;
