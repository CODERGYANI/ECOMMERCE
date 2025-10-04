const mongoose=require('mongoose');
const poductschema=new mongoose.Schema({
    name:String,
    price:Number,
    disconnected:Boolean,
    discount:Number,
    bgcolor:String,
    panelcolour:String,
    textcolour:String,
    image:String,

});
module.exports=mongoose.model("product",productschema);
