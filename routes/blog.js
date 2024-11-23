const express = require("express");
const Router = express.Router();
const {handleBlogCreate,handleBlogGet,handleBlogGetSingle,handleBlogUpdate,handleBlogDelete} = require("../controller/blog");
Router.put("/update/:id",handleBlogUpdate);
Router.get("/",handleBlogGet);
Router.get("/single/:id",handleBlogGetSingle);
Router.post("/",handleBlogCreate);
Router.delete("/:id",handleBlogDelete);

module.exports = Router;
