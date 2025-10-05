const express=require('express');
const router=express.Router();
const usermodel=require('../models/usermodel');
const cookie=require('cookie-parser');

const {usercreater,loginuser}=require("../controllers/usercreater");
router.get("/",(req,res)=>{
    res.send("hey there from users router");
});
router.post("/register",usercreater);
router.post("/login",loginuser);
module.exports=router; 