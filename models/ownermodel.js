const mongoose=require('mongoose');
const ownerschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    products:{type:Array,default:[]},
    contact:Number,
    picture:String,
    gstin:String,
});
module.exports=mongoose.model("owner",ownerschema);
