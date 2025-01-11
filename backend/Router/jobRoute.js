const express=require("express");
const {jobPost, getAllJobs, getJobsByEmail, deleteAjob, updateJob, updateAjobPostById, getJobByUserId} = require("../Controller/jobPost");
const CheckLogin = require("../Middleware/checkLogin");
const router=express.Router();


//public route
router.get('/all-jobs',getAllJobs);


router.post('/job-post',CheckLogin,jobPost);
//my posted jobs
router.get('/myJobs',CheckLogin,getJobByUserId)
router.delete('/job/:id',CheckLogin,deleteAjob);
router.get('/edit-job/:id',CheckLogin,updateJob);
router.patch('/update-job/:id',CheckLogin,updateAjobPostById);

module.exports=router