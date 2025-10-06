const express=require('express');
const router=express.Router();
const upload=require('../config/multer-config');
router.get("/",(req,res)=>{
    res.send("hey there from product router");
});
router.post("/create",upload.single('image'),(req,res)=>{
    res.send("product created");
    
})
module.exports=router; 