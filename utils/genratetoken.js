const jwt=require("jsonwebtoken");
const genratetoken=(user)=>{
    return jwt.sign({email:user.email},process.env.jwt_key);

}
module.exports.genratetoken=genratetoken;