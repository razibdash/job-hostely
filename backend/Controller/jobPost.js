const Jobs=require('../Model/JobPostSchema');

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

module.exports={jobPost,getAllJobs};