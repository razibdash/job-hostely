const express=require("express");
const dotenv=require('dotenv');
const path=require('path');
const cors=require('cors');
const connectDB = require("./config/db");
const cookieParser=require("cookie-parser")
//import job router
const jobRoute=require('./Router/jobRoute')
const userRoute=require('./Router/userRoute');
const app=express();
app.use(express.urlencoded({extended:true}))
dotenv.config()
app.use(express.json());
app.use(cookieParser());
app.use(cors());
connectDB();
app.use('/avatar', express.static(path.join(__dirname, '/public/uploads/avatars')));
// Allow requests from specific origin(s)
// app.use(
//     cors({
//       origin: "http://http://localhost:5173", // React app URL
//       credentials: true, // Include credentials (cookies, authorization headers)
//     })
//   );
app.use('/api',userRoute);
app.use('/api',jobRoute);


app.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT}`);
});

