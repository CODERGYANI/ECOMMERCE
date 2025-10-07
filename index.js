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
const flash=require("connect-flash");
const expressSession=require("express-session");
const ownersRouter=require("./routes/ownersRouter");
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.EXPRESS_SESSION_SECRET,
}))
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success");
  res.locals.error_msg = req.flash("error");
  next();
});
app.use('/uploads', express.static('uploads'));


const usersRouter=require("./routes/usersRouter");
const productRouter=require("./routes/productRouter");
const indexRouter=require("./routes/indexRouter");
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/product",productRouter);
app.use("/",indexRouter);
const mongoose=require("./config/mongoose");
app.listen(3000);