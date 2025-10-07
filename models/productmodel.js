const mongoose=require('mongoose');
const productschema=new mongoose.Schema({
    name:String,
    price:Number,
    discount:Number,
    bgcolor:String,
    panelcolour:String,
    textcolour:String,
    image:Buffer,

});
module.exports=mongoose.model("product",productschema);
