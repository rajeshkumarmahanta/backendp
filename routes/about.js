// 
const express = require("express");
const Router = express.Router();
const {handleAboutUpdate,handleAboutGet} = require("../controller/about");
Router.put("/:id",handleAboutUpdate);
Router.get("/",handleAboutGet);

module.exports = Router;
