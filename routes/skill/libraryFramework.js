// 
const express = require("express");
const Router = express.Router();
const {handleLibraryFrameworkCreate,handleLibraryFrameworkGet,handleLibraryFrameworkGetSingle,handleLibraryFrameworkUpdate,handleLibraryFrameworkDelete} = require("../../controller/skill/libraryFramework");
Router.post("/",handleLibraryFrameworkCreate);
Router.get("/",handleLibraryFrameworkGet);
Router.get("/single/:id",handleLibraryFrameworkGetSingle);
Router.put("/update/:id",handleLibraryFrameworkUpdate);
Router.delete("/delete/:id",handleLibraryFrameworkDelete);

module.exports = Router;
