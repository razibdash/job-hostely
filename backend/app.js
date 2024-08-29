const express=require("express");
const dotenv=require('dotenv')
const app=express();
dotenv.config()

app.get('/',(req,res)=>{
    res.send("node");
})
app.listen(process.env.POST,()=>{
    console.log("app is listening at port 3000");
})