const express=require("express");
const {jobPost, getAllJobs, getJobsByEmail, deleteAjob} = require("../Controller/jobPost");
const router=express.Router();

router.post('/job-post',jobPost);
router.get('/all-jobs',getAllJobs);
router.get('/myJobs/:email',getJobsByEmail)
router.delete('/job/:id',deleteAjob);


module.exports=router