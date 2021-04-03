var express=require('express');
const { Router } = require('express');
var router=express.Router();
const {signout}=require("../controllers/auth");
const {signup}=require("../controllers/auth");
const {signin}=require("../controllers/auth");
const {getDoctor}=require("../controllers/auth");
const {getPatient}=require("../controllers/auth");

router.post("/signup",signup)
router.get("/signout",signout);
router.post("/signin",signin);
router.get("/dprofile/:id",getDoctor);
router.get("/pprofile/:id",getPatient);

module.exports=router;