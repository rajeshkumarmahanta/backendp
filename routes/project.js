// 
const express = require("express");
const Router = express.Router();
const {handleProjectCreate,handleProjectGet,handleProjectGetSingle,handleProjectUpdate,handleProjectDelete} = require("../controller/project");
Router.put("/update/:id",handleProjectUpdate);
Router.get("/",handleProjectGet);
Router.get("/single/:id",handleProjectGetSingle);
Router.post("/",handleProjectCreate);
Router.delete("/:id",handleProjectDelete);

module.exports = Router;
