const express=require("express");
const {jobPost, getAllJobs} = require("../Controller/jobPost");
const router=express.Router();

router.post('/job-post',jobPost);
router.get('/all-jobs',getAllJobs);


module.exports=router