const usermodel=require('../models/usermodel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const {genratetoken}=require("../utils/genratetoken");
const usercreater = async (req,res)=>{
    let {name,email,password}=req.body;
    console.log("le re lund ke");
    let user=await usermodel.findOne({email});
    if(user){
        return res.redirect('/users/login');
    }else{
         try{
      let n=null;
       bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(password,salt, async function(err,hash){
            let m=await usermodel.create({
                name,
                email,
                password:hash,
            });
             let tokken = genratetoken(m);
            res.cookie("token",tokken);
            return res.redirect('/users/login');
        });
       });
       
    }catch(err){
        res.send(err.message);
    }
     

    }
   

}
module.exports.loginuser=async function(req,res){
    let {password,email}=req.body;
    const user=await usermodel.findOne({email});
    if(user){
        let match=await bcrypt.compare(password,user.password);
        if(match){
            let tokken = genratetoken(user);
            res.cookie("token",tokken);
         

           return  res.redirect('/shop');
        }else{
            return res.redirect('/users/login');
        }
    }else{
        console.log('hai hi nhi user us email par');
        return res.redirect('/users/register');
    }
}
module.exports.logout= function(req,res){
    res.cookie('token',"");
    res.redirect('/users/login');  
}
module.exports.usercreater= usercreater;
