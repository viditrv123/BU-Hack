var express=require('express');
const { Router } = require('express');
var router=express.Router();
const {signout}=require("../controllers/auth");
const {signup}=require("../controllers/auth");
const {signin, dsignin, hsignin}=require("../controllers/auth");
const {getDoctor}=require("../controllers/auth");
const {getPatient}=require("../controllers/auth");
const {getHospital}=require("../controllers/auth");
const {addPatient}=require("../controllers/auth");

router.post("/signup",signup);
router.get("/signout",signout);
router.post("/signin",signin);
router.post("/dsignin",dsignin);
router.post("/hsignin",hsignin);
router.get("/dprofile/:id",getDoctor);
router.get("/pprofile/:id",getPatient);
router.get("/hprofile/:id",getHospital);
router.patch("/haddPatient/:id",addPatient);

module.exports=router;