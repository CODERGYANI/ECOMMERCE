const express=require('express');
const router=express.Router();
const usermodel=require('../models/usermodel');
const cookie=require('cookie-parser');
const jwt=require('jsonwebtoken');
const productmodel=require('../models/productmodel');

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
router.get('/cart',async (req,res)=>{
    let token=req.cookies.token;
    let payload=jwt.verify(token,process.env.jwt_key);
    let mail=payload.email;
    let user =await usermodel.findOne({email:mail});
    let products = await productmodel.find({ _id: { $in: user.cart } });


    res.render('cart',{products});
})
router.post("/cart",async (req,res)=>{
    let token=req.cookies.token;
    let payload=jwt.verify(token,process.env.jwt_key);
    let mail=payload.email;
    let user =await usermodel.findOne({email:mail});
    let id=req.body.productId;

    user.cart.push(id);
    await user.save();

    res.redirect('/shop');



})
router.post("/cart/remove/:productId",async (req,res)=>{
    let token=req.cookies.token;
    let payload=jwt.verify(token,process.env.jwt_key);
    let mail=payload.email;
    let user =await usermodel.findOne({email:mail});
    const idToRemove = req.params.productId;
    user.cart = user.cart.filter(pid => pid.toString() !== idToRemove);
    await user.save();
    res.redirect('/users/cart');
});
module.exports=router; 