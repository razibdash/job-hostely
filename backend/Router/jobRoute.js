const express=require("express");
const {jobPost, getAllJobs, getJobsByEmail} = require("../Controller/jobPost");
const router=express.Router();

router.post('/job-post',jobPost);
router.get('/all-jobs',getAllJobs);
router.get('/myJobs/:email',getJobsByEmail)


module.exports=router