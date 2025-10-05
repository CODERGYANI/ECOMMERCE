const usermodel=require('../models/usermodel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const {genratetoken}=require("../utils/genratetoken");
const usercreater =  (req,res)=>{
    let {name,email,password}=req.body;
    console.log("le re lund ke");
    let user=usermodel.findOne({email});
    if(user){
        res.status(401).send("bhai tera pahle hi account hai");
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
            res.send("hogya re hogya");
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
        let match=bcrypt.compare(password,user.password);
        if(match){
              let tokken = genratetoken(match);
            res.cookie("token",tokken);
         

           return  res.send(`Hi there, welcome ${user.name} here is your cookie ! : ${tokken} `);
        }else{
            return res.send("email or password is incorrect");
        }
    }else{
        return res.send("user doesnt exisits,kindly login!");
    }
}
module.exports.usercreater= usercreater;
