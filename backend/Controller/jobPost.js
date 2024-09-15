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
//delete a job
const deleteAjob=async(req,res)=>{
    try {
        const id=req.params.id;
         const filter={_id:id};
         const result=await Jobs.deleteOne(filter);
         res.status(200).json({
            message:"Job post was deleted!",
         })
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })   
    }
}
//get a job post by id
const updateJob=async(req,res)=>{
    try {
        const updateId=req.params.id;
        const jobData=await Jobs.findOne({_id:updateId});
        res.send(jobData);

    } catch (error) {
        res.status(500).json({
            message:error.message,
        }) 
    }
}
 //update a job post by id
 const updateAjobPostById=async(req,res)=>{
    try {
        const id=req.params.id;
        const jobdata= req.body;
        const filter={_id:id}
        const option={upsert:true}
        const updateData={
            $set:{
                ...jobdata
            },

        };
        const result=await Jobs.updateOne(filter,updateData,option);
        res.status(200).json(result);
    } catch (error) {
        
    }
 }
module.exports={
    jobPost,
    getAllJobs,
    getJobsByEmail,
    deleteAjob,
    updateJob,
    updateAjobPostById
};