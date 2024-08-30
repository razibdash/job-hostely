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
    minimumSalary:{
        type:String,
        required:true
    },
    maximumSalary:{
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
    
});
 const jobs=mongoose.model("job",JobpostSchema);
module.exports=jobs;