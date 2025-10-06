const jwt=require('jsonwebtoken');
const usermodel=require('../models/usermodel');
module.exports.isLoggedin=async function(req,res,next){
    let token=req.cookies.token;
    if(!token){
        req.flash("error","you are not logged in");
        return res.redirect('/users/login');
    }else{
        try{
          let decoded=jwt.verify(token,process.env.jwt_key);
          let user=await usermodel.findOne({email:decoded.email});
          req.user=user;
          next();
        }catch(err){
            console.log(err.message);
            req.flash("error","something went wrong");
            return res.redirect('/');
    }   
    } 
}
