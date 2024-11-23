const express = require("express");
const Router = express.Router();
const {
    handleMessageGet,
    handleMessageDelete,
    handleMessageCreate
} = require("../controller/message");
Router.delete("/:id",handleMessageDelete);
Router.get("/",handleMessageGet);
Router.post("/",handleMessageCreate);

module.exports = Router;
