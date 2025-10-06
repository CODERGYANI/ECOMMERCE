const express=require("express");
const router=express.Router();
const {isLoggedin}=require("../middlewares/isLoggedin.js");
router.get("/",(req,res)=>{
    res.render("starting");
});
router.get("/shop",isLoggedin,(req,res)=>{
    res.render("shop");

});

module.exports=router;