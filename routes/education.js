
const express = require("express");
const Router = express.Router();
const {handleEducationCreate,handleEducationGet,handleSingleEducationGet,handleEducationUpdate,handleEducationDelete} = require("../controller/education");
Router.put("/update/:id",handleEducationUpdate);
Router.get("/",handleEducationGet);
Router.post("/",handleEducationCreate);
Router.get("/single/:id",handleSingleEducationGet);
Router.delete("/:id",handleEducationDelete);

module.exports = Router;
