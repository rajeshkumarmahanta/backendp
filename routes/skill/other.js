// 
const express = require("express");
const Router = express.Router();
const {
    handleOtherCreate,
    handleOtherGet,
    handleOtherGetSingle,
    handleOtherUpdate,
    handleOtherDelete
} = require("../../controller/skill/other");
Router.post("/",handleOtherCreate);
Router.get("/",handleOtherGet);
Router.get("/single/:id",handleOtherGetSingle);
Router.put("/update/:id",handleOtherUpdate);
Router.delete("/delete/:id",handleOtherDelete);

module.exports = Router;
