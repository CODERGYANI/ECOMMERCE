const mongoose=require('mongoose');
const dbgr=require('debug')("development:mongoose");
const config=require('config');


mongoose
.connect(`${config.get("MONGODB_URI")}/multer`)

.then(function(){
     dbgr("connected");
})
.catch(function(err){
    console.log("error :",err);
})
module.exports=mongoose.connection;