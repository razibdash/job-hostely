const express=require("express");
const {jobPost, getAllJobs, getJobsByEmail, deleteAjob, updateJob, updateAjobPostById} = require("../Controller/jobPost");
const router=express.Router();

router.post('/job-post',jobPost);
router.get('/all-jobs',getAllJobs);
router.get('/myJobs/:email',getJobsByEmail)
router.delete('/job/:id',deleteAjob);
router.get('/edit-job/:id',updateJob);
router.patch('/update-job/:id',updateAjobPostById);

module.exports=router