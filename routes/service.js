const express = require("express");
const Router = express.Router();
const {handleServiceCreate,handleServiceGet,handleServiceGetSingle,handleServiceUpdate,handleServiceDelete} = require("../controller/service");
Router.put("/update/:id",handleServiceUpdate);
Router.get("/",handleServiceGet);
Router.get("/single/:id",handleServiceGetSingle);
Router.post("/",handleServiceCreate);
Router.delete("/:id",handleServiceDelete);

module.exports = Router;
