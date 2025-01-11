const express=require("express");
const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
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

    Jobs:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Job"
        }
    ]
       
    
});


module.exports=mongoose.model('User',userSchema);