const Jobs=require('../Model/JobPostSchema');
const User=require("../Model/UserModel");
const mongoose=require('mongoose');
//post a jobs 
const jobPost=async(req,res)=>{
     try {
        const id=req.id;
         const newJobs=new Jobs({user:id,...req.body,});
        const jobpost= await newJobs.save();

        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid User ID');
          }
          if (!mongoose.Types.ObjectId.isValid(jobpost._id)) {
            throw new Error('Invalid Job Post ID');
          }
        const updateUser = await User.updateOne( { _id:id}, { $push:{ Jobs:jobpost._id}})
        if(updateUser){
            res.status(201).json({
                success:true,
                message:"course is create successfully",
                jobs:jobpost,
                user:req.id,
               

            })
        }


        
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
const getJobByUserId=async(req,res)=>{
    try {       
        const jobs=await Jobs.find({user:req.id});
        res.status(200).json({
            success:true,
           message:"data fetch is success",   
           jobs:jobs,
        });
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
            success:true,
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
    updateAjobPostById,
    getJobByUserId
};