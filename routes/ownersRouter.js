const express=require('express');
const router=express.Router();
const ownermodel=require('../models/ownermodel');
router.get("/",(req,res)=>{
    res.send("hey there from owners router");
});
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === "development"){
    router.post("/create",async (req,res)=>{
        let owners=await ownermodel.find();
       
        if(owners.length>0){
           return res.status(503).send("you dont have permission to create new owner");
        }
        let {name,email,password}=req.body;
        let created =await ownermodel.create({
             name,
             email,
             password,
   
        });
        console.log("chal gya bhai");
        res.status(201).send(created);
        
    
});


    
}


module.exports=router; 