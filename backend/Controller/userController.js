const User=require('../Model/UserModel');
const mongoose=require('mongoose');


const signupAuser=async(req,res)=>{
    try {
        const newUser= new User(req.body);
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

module.exports={
    signupAuser
}