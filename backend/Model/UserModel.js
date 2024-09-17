const express=require("express");
const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    fName:{
        type:String,
        required:true
    },
    lName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    Job:{
        type:mongoose.Types.ObjectId,
        ref:"Job"
    }
});

const User=mongoose.model('User',userSchema);

module.exports=User;