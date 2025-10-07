const express=require('express');
const router=express.Router();
const productmodel=require('../models/productmodel');
const upload=require('../config/multer-config');
router.get("/",(req,res)=>{
    res.send("hey there from product router");
});
router.post("/create",upload.single('image'),async (req,res)=>{
    

    let {name,price,discount,bgcolor,panelcolor,textcolor}=req.body;
    try{
         let image=req.file.buffer;
    let product =await productmodel.create({
        image,
        name,
        price,
        discount,
        bgcolor,
        panelcolor,
        textcolor,
    });
    req.flash("success","done hai mittar");
    console.log(product);
    res.redirect('/owners/admin');
    

    }catch(err){
        req.flash("error","something went wrong");
        res.send(err.message);
    }
   
    
})
module.exports=router; 