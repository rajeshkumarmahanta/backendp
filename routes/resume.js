const express = require("express");
const Router = express.Router();
const upload = require("../multer/multerConfig");
const {handleResumeUpdate,handleResumeGet} = require("../controller/resume");
Router.post("/:id",upload.single("resume"),handleResumeUpdate);
Router.get("/",handleResumeGet);

module.exports = Router;
