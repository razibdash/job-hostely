const Jobs=require('../Model/JobPostSchema');

//post a jobs 
const jobPost=async(req,res)=>{
     try {
         const newJobs=new Jobs(req.body);
         await newJobs.save();
         res.status(200).json(newJobs)
     } catch (error) {
        res.status(500).json({
            message:error.message,
        })
     }
}
//get all jobs
const getAllJobs=async(req,res)=>{
    try {
        const data=await Jobs.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
}
// get jobs by email
const getJobsByEmail=async(req,res)=>{
    try {
        const findByEmail=req.params.email;
        const jobs=await Jobs.find({jobPostBy:findByEmail});
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })   
    }
}

module.exports={
    jobPost,
    getAllJobs,
    getJobsByEmail};