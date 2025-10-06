const express=require('express');
const router=express.Router();
const ownermodel=require('../models/ownermodel');
const productRouter=require("./productRouter");
router.get("/",(req,res)=>{
    res.send("hey there from owners router");
});
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === "development"){
    router.post("/create",async (req,res)=>{
       
        
    
});   
}
router.use('/product',productRouter);

router.get('/admin',function(req,res){
    res.render('creatproducts');
});


module.exports=router; 