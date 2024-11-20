const mongoose = require('mongoose');
require("dotenv").config();
// const db = "mongodb+srv://rajeshkumarmahanta2128:portfoliorajesh@cluster0.el7fr.mongodb.net/rajeshportfolio?retryWrites=true&w=majority&appName=Cluster0";
//const db = "mongodb+srv://rajeshkumarmahanta2128:Rajesh@123@portfolio-db.jmagw.mongodb.net/?retryWrites=true&w=majority&appName=portfolio-db";
mongoose.connect("mongodb+srv://rajeshkumarmahanta2128:Rajesh%40123@portfolio-db.jmagw.mongodb.net/?retryWrites=true&w=majority&appName=portfolio-db");
const adminSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const adminModel = mongoose.model("admin",adminSchema);

module.exports = adminModel
