// 
const express = require("express");
const Router = express.Router();
const {handleDatabaseCreate,handleDatabaseGet,handleDatabaseGetSingle,handleDatabaseUpdate,handleDatabaseDelete} = require("../../controller/skill/database");
Router.post("/",handleDatabaseCreate);
Router.get("/",handleDatabaseGet);
Router.get("/single/:id",handleDatabaseGetSingle);
Router.put("/update/:id",handleDatabaseUpdate);
Router.delete("/delete/:id",handleDatabaseDelete);

module.exports = Router;
