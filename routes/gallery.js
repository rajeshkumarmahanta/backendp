const express = require("express");
const upload = require("../multer/multerConfig");
const Router = express.Router();
const {
    handleGalleryGet,
    handleGalleryDelete,
    handleGalleryCreate
} = require("../controller/gallery");
Router.delete("/:id",handleGalleryDelete);
Router.get("/",handleGalleryGet);
Router.post("/",upload.single("iimage"),handleGalleryCreate);

module.exports = Router;
