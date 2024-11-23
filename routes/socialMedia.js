const express = require("express");
const Router = express.Router();
const {
    handleSocialMediaGet,
    handleSocialMediaUpdate,
} = require("../controller/socialMedia");
Router.put("/:id",handleSocialMediaUpdate);
Router.get("/",handleSocialMediaGet);

module.exports = Router;
