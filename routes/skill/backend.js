// 
const express = require("express");
const Router = express.Router();
const {handleBackendCreate,handleBackendGet,handleBackendGetSingle,handleBackendUpdate,handleBackendDelete} = require("../../controller/skill/backend");
Router.post("/",handleBackendCreate);
Router.get("/",handleBackendGet);
Router.get("/single/:id",handleBackendGetSingle);
Router.put("/update/:id",handleBackendUpdate);
Router.delete("/delete/:id",handleBackendDelete);

module.exports = Router;
