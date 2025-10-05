const mongoose=require('mongoose');

const userschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    cart:{type:Array,default:[]},
    orders:{type:Array,default:[]},
    contact:Number,
    picture:String,
});
module.exports=mongoose.model("users",userschema);
