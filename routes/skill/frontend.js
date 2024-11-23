// 
const express = require("express");
const Router = express.Router();
const {handleFrontedCreate,handleFrontendGet,handleFrontendGetSingle,handleFrontendUpdate,handleFrontendDelete} = require("../../controller/skill/frontend");
Router.post("/",handleFrontedCreate);
Router.get("/",handleFrontendGet);
Router.get("/single/:id",handleFrontendGetSingle);
Router.put("/update/:id",handleFrontendUpdate);
Router.delete("/delete/:id",handleFrontendDelete);

module.exports = Router;
