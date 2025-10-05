const express=require('express');
const path=require('path');
const app=express();
const cookieParser=require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,'public')));
require('dotenv').config();

const ownersRouter=require("./routes/ownersRouter");
const usersRouter=require("./routes/usersRouter");
const productRouter=require("./routes/productRouter");
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/product",productRouter);
const mongoose=require("./config/mongoose");
app.get("/",(req,res)=>{
    res.send("hey there lets build it");
})
app.listen(3000);