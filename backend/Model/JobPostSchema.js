const express=require("express");
const mongoose=require("mongoose");

const JobpostSchema=mongoose.Schema({
    jobTitle:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    minPrice:{
        type:String,
        required:true
    },
    maxPrice:{
        type:String,
        required:true
    },
    salaryType:{
        type:String,
        required:true
    },
    jobLocation:{
        type:String,
        required:true
    },
    experienceLevel:{
        type:String,
        required:true
    },
    postingDate:{
        type:Date,
        default:Date,
    },
    logo:{
        type:String,
        required:true,
    },
    employmentType:{
        type:String,
        required:true,
    },
    skills:{
        type:Array,
        required:true,

    },
    jobPostBy:{
        type:String,
        required:true,
    },
    jobDescriptions:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
    
});
 const Jobs= new mongoose.model("Job",JobpostSchema);
module.exports=Jobs;