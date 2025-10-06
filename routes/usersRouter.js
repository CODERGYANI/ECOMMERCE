const express=require('express');
const router=express.Router();
const usermodel=require('../models/usermodel');
const cookie=require('cookie-parser');

const {usercreater,loginuser,logout}=require("../controllers/usercreater");
router.get("/",(req,res)=>{
    res.send("hey there from users router");
});
router.get('/register',(req,res)=>{
    res.render("register");
})
router.get('/login',(req,res)=>{
    res.render('login');
})

router.post("/register",usercreater);
router.post("/login",loginuser);
router.get("/logout",logout);
module.exports=router; 