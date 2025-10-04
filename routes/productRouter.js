const express=require('express');
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("hey there from product router");
});
module.exports=router; 