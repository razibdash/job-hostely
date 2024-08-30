const express=require("express");
const jobPost = require("../Controller/jobPost");
const router=express.Router();

router.post('/',jobPost);


module.exports=router