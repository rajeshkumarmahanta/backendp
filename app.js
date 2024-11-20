const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
// models
const adminModel = require("./models/admin");
const homeModel = require("./models/Home");
const aboutModel = require("./models/About");
const resumeModel = require("./models/Resume");
const frontendModel = require("./models/skills/frontend");
const backendModel = require("./models/skills/backend");
const LFModel = require("./models/skills/LF");
const databaseModel = require("./models/skills/database");
const otherModel = require("./models/skills/other");
const eduModel = require("./models/Education");
const serviceModel = require("./models/Service");
const projectModel = require("./models/Project");
const blogModel = require("./models/Blog");
const socialModel = require("./models/Socialmedia");
const messageModel = require("./models/Message");
const galleryModel = require("./models/Gallery");
const upload = require("./multer/multerConfig");
const nodemailer = require("nodemailer");
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin:["https://rajesh-portfolio-frontend.vercel.app/"],
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}));
app.use(cookieParser());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("...");
});
//admin create
// app.post("/create", (req, res) => {
//   // userModel.findone({})
//   try {
//     const { username, password } = req.body;
    
//     bcrypt.genSalt(12, function (err, salt) {
//       bcrypt.hash(password, salt, async function (err, hash) {
//         let admin = await adminModel.findOne({ username: username });
//         if (!admin) {
//           let createduser = await adminModel.create({
//             username: username,
//             password: hash,
//           });
//           res.send(createduser);
//         }
//       });
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });
//admin
app.post("/admin", async (req, res) => {
  const { username, password } = req.body;
  let admin = await adminModel.findOne({ username: username });
  bcrypt.compare(password, admin.password, function (err, result) {
    if (result) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
});
// upload resume handle
app.post("/resume", upload.single("resume"), async (req, res) => {
  console.log();
  try {
    let resume = await resumeModel.create({ resume: req.file.filename });
    res.send(true);
  } catch (err) {
    res.send(err);
  }
});

//home page resume button
app.get("/resume", async (req, res) => {
  try {
    let resume = await resumeModel.findOne();
    res.send(resume);
  } catch (err) {
    res.send(err);
  }
});
// Home update
app.put("/homeupdate/:id", async (req, res) => {
  try {
    const { homeText } = req.body;
    let updatedText = await homeModel.updateOne(
      { _id: req.params.id },
      { $set: { homeText: homeText } }
    );
    res.send(updatedText);
  } catch (err) {
    res.send(err);
  }
});
// About update
app.put("/about/:id", async (req, res) => {
  try {
    const { title, description } = req.body;
    let updatedText = await aboutModel.updateOne(
      { _id: req.params.id },
      { $set: { title, description } }
    );
    res.send(updatedText);
  } catch (err) {
    res.send(err);
  }
});
//about data get
app.get("/about", async (req, res) => {
  let about = await aboutModel.findOne();
  res.send(about);
});
//home data get
app.get("/home", async (req, res) => {
  let homeData = await homeModel.findOne();
  res.send(homeData);
});
// skills handle frontend
app.post("/frontend", async (req, res) => {
  try {
    const { frontendRangeValue, BgColorfrontend, FSkillName, FSkillDesc } =
      req.body;
    const hasSkill = await frontendModel.findOne({ name: FSkillName });
    if (!hasSkill) {
      let frontend = await frontendModel.create({
        name: FSkillName,
        description: FSkillDesc,
        bgColor: BgColorfrontend,
        percent: frontendRangeValue,
      });
      res.send(true);
    } else {
      res.send("skillAlreadyExist");
    }
  } catch (err) {
    res.send(false);
  }
});
app.get("/frontend", async (req, res) => {
  try {
    let frontend = await frontendModel.find();
    res.send(frontend);
  } catch (err) {
    res.send(err);
  }
});
app.get("/singlefrontend/:id", async (req, res) => {
  try {
    let singlefrontend = await frontendModel.findOne({ _id: req.params.id });
    res.send(singlefrontend);
  } catch (err) {
    res.send(err);
  }
});
app.put("/updatefrontend/:id", async (req, res) => {
  try {
    const { frontendRangeValue, BgColorfrontend, FSkillName, FSkillDesc } =
      req.body;
    let updatedFrontend = await frontendModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: FSkillName,
          description: FSkillDesc,
          percent: frontendRangeValue,
          bgColor: BgColorfrontend,
        },
      }
    );
    res.send(updatedFrontend);
  } catch (err) {
    res.send(err);
  }
});
app.delete("/frontenddelete/:id", async (req, res) => {
  try {
    let deletedFrontend = await frontendModel.deleteOne({ _id: req.params.id });
    res.send(deletedFrontend);
  } catch (err) {
    res.send(err);
  }
});
//handle backend skill
app.post("/backend", async (req, res) => {
  try {
    const { backendRangeValue, BgColorbackend, BSkillName, BSkillDesc } =
      req.body;
    const hasSkill = await backendModel.findOne({ name: BSkillName });
    if (!hasSkill) {
      let backend = await backendModel.create({
        name: BSkillName,
        description: BSkillDesc,
        bgColor: BgColorbackend,
        percent: backendRangeValue,
      });
      res.send(true);
    } else {
      res.send("skillAlreadyExist");
    }
  } catch (err) {
    res.send(false);
  }
});
app.get("/backend", async (req, res) => {
  try {
    let backend = await backendModel.find();
    res.send(backend);
  } catch (err) {
    res.send(err);
  }
});
app.get("/singlebackend/:id", async (req, res) => {
  try {
    let singlebackend = await backendModel.findOne({ _id: req.params.id });
    res.send(singlebackend);
  } catch (err) {
    res.send(err);
  }
});
app.put("/updatebackend/:id", async (req, res) => {
  try {
    const { backendRangeValue, BgColorbackend, BSkillName, BSkillDesc } =
      req.body;
    let updatedBackend = await backendModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: BSkillName,
          description: BSkillDesc,
          percent: backendRangeValue,
          bgColor: BgColorbackend,
        },
      }
    );
    res.send(updatedBackend);
  } catch (err) {
    res.send(err);
  }
});
app.delete("/backenddelete/:id", async (req, res) => {
  try {
    let deletedBackend = await backendModel.deleteOne({ _id: req.params.id });
    res.send(deletedBackend);
  } catch (err) {
    res.send(err);
  }
});

//handle Database skill
app.post("/database", async (req, res) => {
  try {
    const { databaseRangeValue, BgColordatabase, DSkillName, DSkillDesc } =
      req.body;
    const hasSkill = await databaseModel.findOne({ name: DSkillName });
    if (!hasSkill) {
      let database = await databaseModel.create({
        name: DSkillName,
        description: DSkillDesc,
        bgColor: BgColordatabase,
        percent: databaseRangeValue,
      });
      res.send(true);
    } else {
      res.send("skillAlreadyExist");
    }
  } catch (err) {
    res.send(false);
  }
});
app.get("/database", async (req, res) => {
  try {
    let database = await databaseModel.find();
    res.send(database);
  } catch (err) {
    res.send(err);
  }
});
app.get("/singledatabase/:id", async (req, res) => {
  try {
    let singledatabase = await databaseModel.findOne({ _id: req.params.id });
    res.send(singledatabase);
  } catch (err) {
    res.send(err);
  }
});
app.put("/updatedatabase/:id", async (req, res) => {
  try {
    const { databaseRangeValue, BgColordatabase, DSkillName, DSkillDesc } =
      req.body;
    let updatedDatabase = await databaseModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: DSkillName,
          description: DSkillDesc,
          percent: databaseRangeValue,
          bgColor: BgColordatabase,
        },
      }
    );
    res.send(updatedDatabase);
  } catch (err) {
    res.send(err);
  }
});
app.delete("/databasedelete/:id", async (req, res) => {
  try {
    let deletedDatabase = await databaseModel.deleteOne({ _id: req.params.id });
    res.send(deletedDatabase);
  } catch (err) {
    res.send(err);
  }
});

//handle Library/framework skill

app.post("/libraryFramework", async (req, res) => {
  try {
    const {
      LFSkillName,
      LFSkillDesc,
      BgColorlibraryFramework,
      libraryFrameworkRangeValue,
    } = req.body;
    const hasSkill = await LFModel.findOne({ name: LFSkillName });
    if (!hasSkill) {
      let LF = await LFModel.create({
        name: LFSkillName,
        description: LFSkillDesc,
        bgColor: BgColorlibraryFramework,
        percent: libraryFrameworkRangeValue,
      });
      res.send(true);
    } else {
      res.send("skillAlreadyExist");
    }
  } catch (err) {
    res.send(false);
  }
});
app.get("/libraryframework", async (req, res) => {
  try {
    let libraryframework = await LFModel.find();
    res.send(libraryframework);
  } catch (err) {
    res.send(err);
  }
});

app.put("/updatelibraryframework/:id", async (req, res) => {
  try {
    const {
      LFSkillName,
      LFSkillDesc,
      BgColorlibraryFramework,
      libraryFrameworkRangeValue,
    } = req.body;
    let updatedLF = await LFModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: LFSkillName,
          description: LFSkillDesc,
          percent: libraryFrameworkRangeValue,
          bgColor: BgColorlibraryFramework,
        },
      }
    );
    res.send(updatedLF);
  } catch (err) {
    res.send(err);
  }
});

app.get("/singlelibraryframework/:id", async (req, res) => {
  try {
    let singleLF = await LFModel.findOne({ _id: req.params.id });
    res.send(singleLF);
  } catch (err) {
    res.send(err);
  }
});

app.delete("/libraryframeworkdelete/:id", async (req, res) => {
  try {
    let deletedLF = await LFModel.deleteOne({ _id: req.params.id });
    res.send(deletedLF);
  } catch (err) {
    res.send(err);
  }
});

//handle other skill

app.post("/otherskill", async (req, res) => {
  try {
    const {
      othertoolRangeValue,
      BgColorothertool,
      otherSkillName,
      otherSkillDesc,
    } = req.body;
    const hasSkill = await otherModel.findOne({ name: otherSkillName });
    if (!hasSkill) {
      let other = await otherModel.create({
        name: otherSkillName,
        description: otherSkillDesc,
        bgColor: BgColorothertool,
        percent: othertoolRangeValue,
      });
      res.send(true);
    } else {
      res.send("skillAlreadyExist");
    }
  } catch (err) {
    res.send(false);
  }
});
app.get("/otherskill", async (req, res) => {
  try {
    let other = await otherModel.find();
    res.send(other);
  } catch (err) {
    res.send(err);
  }
});

app.put("/updateotherskill/:id", async (req, res) => {
  try {
    const {
      othertoolRangeValue,
      BgColorothertool,
      otherSkillName,
      otherSkillDesc,
    } = req.body;
    let updatedOther = await otherModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: otherSkillName,
          description: otherSkillDesc,
          percent: othertoolRangeValue,
          bgColor: BgColorothertool,
        },
      }
    );
    res.send(updatedOther);
  } catch (err) {
    res.send(err);
  }
});

app.get("/singleotherskill/:id", async (req, res) => {
  try {
    let singleOther = await otherModel.findOne({ _id: req.params.id });
    res.send(singleOther);
  } catch (err) {
    res.send(err);
  }
});

app.delete("/otherskilldelete/:id", async (req, res) => {
  try {
    let deletedOther = await otherModel.deleteOne({ _id: req.params.id });
    res.send(deletedOther);
  } catch (err) {
    res.send(err);
  }
});

// education handle
app.get("/education", async (req, res) => {
  try {
    let education = await eduModel.find();
    res.send(education);
  } catch (err) {
    res.send(err);
  }
});
app.post("/education", async (req, res) => {
  try {
    const { educationName, collegeName, passedYear, eduBgColor } = req.body;
    let hasEdu = await eduModel.findOne({ name: educationName });
    if (!hasEdu) {
      let education = await eduModel.create({
        name: educationName,
        passedYear: passedYear,
        bgColor: eduBgColor,
        collegeName: collegeName,
      });
      res.send(educationName);
    } else {
      res.send("eduAlreadyExist");
    }
  } catch (err) {
    res.send(err);
  }
});
app.get("/singleeducation/:id", async (req, res) => {
  try {
    let singleEdu = await eduModel.findOne({ _id: req.params.id });
    res.send(singleEdu);
  } catch (err) {
    res.send(err);
  }
});
app.delete("/educationdelete/:id", async (req, res) => {
  try {
    let deletedEdu = await eduModel.deleteOne({ _id: req.params.id });
    res.send(deletedEdu);
  } catch (err) {
    res.send(err);
  }
});
app.put("/updateeducation/:id", async (req, res) => {
  try {
    const { educationName, collegeName, passedYear, eduBgColor } = req.body;
    let updatedEdu = await eduModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: educationName,
          passedYear: passedYear,
          bgColor: eduBgColor,
          collegeName: collegeName,
        },
      }
    );
    res.send(updatedEdu);
  } catch (err) {
    res.send(err);
  }
});

// handleServices
app.get("/service", async (req, res) => {
  try {
    const services = await serviceModel.find();
    res.send(services);
  } catch (error) {
    res.json(err);
  }
});
app.post("/service", async (req, res) => {
  try {
    const { serviceTitile, serviceDesc, serviceIcon, serviceColor } = req.body;
    let hasService = await serviceModel.findOne({ title: serviceTitile });
    if (!hasService) {
      let createdServices = await serviceModel.create({
        title: serviceTitile,
        description: serviceDesc,
        icon: serviceIcon,
        color: serviceColor,
      });
      res.send(createdServices);
    } else {
      res.send("serviceAlreadyExist");
    }
  } catch (error) {
    res.send(error);
  }
});
app.get("/singleservice/:id", async (req, res) => {
  try {
    let singleService = await serviceModel.findOne({ _id: req.params.id });
    res.send(singleService);
  } catch (error) {
    res.send(error);
  }
});
app.put("/serviceupdate/:id", async (req, res) => {
  try {
    const { serviceTitile, serviceDesc, serviceIcon, serviceColor } = req.body;
    let updatedService = await serviceModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: serviceTitile,
          description: serviceDesc,
          color: serviceColor,
          icon: serviceIcon,
        },
      }
    );
    res.send(updatedService);
  } catch (err) {
    res.send(err);
  }
});
app.delete("/servicedelete/:id", async (req, res) => {
  try {
    let deletedService = await serviceModel.deleteOne({ _id: req.params.id });
    res.send(deletedService);
  } catch (err) {
    res.send(err);
  }
});

// handle project
app.post("/project", async (req, res) => {
  try {
    const { projectTitle, projectDesc, projectUrl, projectTech } = req.body;
    let technologies = projectTech.split(",");
    let hasProject = await projectModel.findOne({ title: projectTitle });
    if (!hasProject) {
      let createdProject = await projectModel.create({
        title: projectTitle,
        description: projectDesc,
        url: projectUrl,
        technology: technologies,
      });
      res.send(createdProject);
    } else {
      res.send("projectAlreadyExist");
    }
  } catch (error) {
    res.send(error);
  }
});
app.get("/project", async (req, res) => {
  try {
    const projects = await projectModel.find();
    res.send(projects);
  } catch (error) {
    res.json(err);
  }
});
app.get("/singleproject/:id", async (req, res) => {
  try {
    let singleProject = await projectModel.findOne({ _id: req.params.id });
    res.send(singleProject);
  } catch (error) {
    res.send(error);
  }
});
app.put("/projectupdate/:id", async (req, res) => {
  try {
    const { projectTitle, projectDesc, projectUrl, projectTech } = req.body;
    let technologies = projectTech.split(",");
    let updatedProject = await projectModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: projectTitle,
          description: projectDesc,
          url: projectUrl,
          technology: technologies,
        },
      }
    );
    res.send(updatedProject);
  } catch (err) {
    res.send(err);
  }
});
app.delete("/projectdelete/:id", async (req, res) => {
  try {
    let deletedProject = await projectModel.deleteOne({ _id: req.params.id });
    res.send(deletedProject);
  } catch (err) {
    res.send(err);
  }
});
//handle blog
app.post("/blog", async (req, res) => {
  try {
    const { blogTitle, blogDesc, blogImage } = req.body;
    let existBlog = await blogModel.findOne({ title: blogTitle });
    // console.log(existBlog)
    if (!existBlog) {
      let createdBlog = await blogModel.create({
        title: blogTitle,
        description: blogDesc,
        imageUrl: blogImage,
      });
      res.send(createdBlog);
    } else {
      res.send("blogAlreadyExist");
    }
  } catch (err) {
    res.send(err);
  }
});

app.get("/blog", async (req, res) => {
  try {
    let blogs = await blogModel.find();
    res.send(blogs);
  } catch (error) {
    res.send(error);
  }
});
app.get("/singleblog/:id", async (req, res) => {
  try {
    let singleBlogs = await blogModel.findOne({ _id: req.params.id });
    res.send(singleBlogs);
  } catch (error) {
    res.send(error);
  }
});
app.put("/blog/:id", async (req, res) => {
  try {
    const { blogTitle, blogDesc, blogImage } = req.body;
    let updatedBlog = await blogModel.updateOne(
      { _id: req.params.id },
      { $set: { title: blogTitle, description: blogDesc, imageUrl: blogImage } }
    );
    res.send(updatedBlog);
  } catch (error) {
    res.send(error);
  }
});
app.delete("/blog/:id", async (req, res) => {
  try {
    let deletedBlog = await blogModel.deleteOne({ _id: req.params.id });
    res.send(deletedBlog);
  } catch (error) {
    res.send(error);
  }
});
app.put("/socialmedia/:id", async (req, res) => {
  try {
    const { instagram, facebook, github, twitter, linkedin } = req.body;
    let updatedLinks = await socialModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          facebook: facebook,
          instagram: instagram,
          linkedin: linkedin,
          github: github,
          twitter: twitter,
        },
      }
    );
    res.send(updatedLinks);
  } catch (error) {
    res.send(error);
  }
});
app.get("/socialmedia", async (req, res) => {
  try {
    let links = await socialModel.findOne();
    res.send(links);
  } catch (error) {
    res.send(error);
  }
});
app.post("/message", async (req, res) => {
  try {

    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
      service:"gmail",
       auth: {
         user: "scripyking612@gmail.com",
         pass: "eyxcufsnvzexxndx",
       },
     });
       transporter.sendMail({
         from: process.env.MAIL_FROM,
         to: process.env.TO,
         subject: `Message from ${name}`,
         text: `name : ${name},\n email : ${email} \n message : ${message}`
       });
    let messageUser = await messageModel.create({ name, email, message });
    res.send(true);
  } catch (error) {
    res.send(error);
  }
});
app.get("/message", async (req, res) => {
  try {
    let messageUsers = await messageModel.find();
    res.send(messageUsers);
  } catch (error) {
    res.send(error);
  }
});
app.delete("/message/:id", async (req, res) => {
  try {
    let deletedUsers = await messageModel.deleteOne({ _id: req.params.id });
    res.send(true);
  } catch (error) {
    res.send(error);
  }
});
// gallery
app.post("/gallery", upload.single("image"), async (req, res) => {
  try {
    let image = await galleryModel.create({
      title: req.body.title,
      image: req.file.filename,
    });
    res.send(true);
  } catch (error) {
    res.send(error);
  }
});
app.get("/gallery", async (req, res) => {
  try {
    let images = await galleryModel.find();
    res.send(images);
  } catch (error) {
    res.send(error);
  }
});
app.delete("/gallery/:id", async (req, res) => {
  try {
    let images = await galleryModel.deleteOne({ _id: req.params.id });
    res.send(true);
  } catch (error) {
    res.send(error);
  }
});

// all data

// app.get("/allData", async (req, res) => {
//   try {
//     const adminData = await adminModel.find({});
//     const HomeData = await homeModel.find({});
//     const about = await aboutModel.find({});
//     const resume = await resumeModel.find({});
//     const frontend = await frontendModel.find({});
//     const backend = await backendModel.find({});
//     const lf = await LFModel.find({});
//     const database = await databaseModel.find({});
//     const other = await otherModel.find({});
//     const educations = await eduModel.find({});
//     const services = await serviceModel.find({});
//     const projects = await projectModel.find({});
//     const blogs = await blogModel.find({});
//     const socialLinks = await socialModel.find({});
//     const messagedata = await messageModel.find({});
//     const gallerydata = await galleryModel.find({});
//     const allData = [
//       {admin:adminData},
//      {about},
//       {resume},
//       {
//         skills:{
//           frontend,
//           backend,
//           lf,
//           database,
//           other
//         }
//       },
//       {educations},
//       {projects},
//       {services},
//      {blogs},
//       {socialLinks},
//       {messagedata},
//       {gallerydata}
//     ];
//     res.json(allData);
//   } catch (error) {
//     res.send(error);
//   }
// });

//   console.log(admin);
app.listen(process.env.PORT);
