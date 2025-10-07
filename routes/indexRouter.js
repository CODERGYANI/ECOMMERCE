const express=require("express");
const router=express.Router();
const {isLoggedin}=require("../middlewares/isLoggedin.js");
const productmodel=require("../models/productmodel.js");
router.get("/",(req,res)=>{
    res.render("starting");
});
router.get("/shop",isLoggedin, async (req,res)=>{
    let data= await productmodel.find();
    res.render('shop',{data});

});


module.exports=router;