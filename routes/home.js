// 
const express = require("express");
const Router = express.Router();
const {handleHomeUpdate,handleHomeGet} = require("../controller/home");
Router.put("/update/:id",handleHomeUpdate);
Router.get("/",handleHomeGet);

module.exports = Router;
