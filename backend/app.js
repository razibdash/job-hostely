const express=require("express");
const dotenv=require('dotenv')
const cors=require('cors');
const connectDB = require("./config/db");
//import job router
const jobRoute=require('./Router/jobRoute')
const app=express();
dotenv.config()
app.use(express.json());
app.use(cors());
connectDB();


app.use('/api',jobRoute);


app.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT}`);
});

