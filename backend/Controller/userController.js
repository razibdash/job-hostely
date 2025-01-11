const bcrypt=require('bcrypt');
const User = require('../Model/UserModel');
const {hashedPwd, checkPwd}=require("../config/utility");



const signupAuser=async(req,res)=>{
    try {
        const {firstName,lastName,email,phone,password}=req.body;
        const hash=await hashedPwd(password)
        const newUser=new User({firstName,lastName,phone,email,password:hash});
        await newUser.save();

        res.status(200).json(newUser);
    } catch (error) {
         res.status(500).json({error:error.message});
       
       
    }
}
//login user
const login=async(req,res)=>{
    try {
        const email=req.body.email;
        const user= await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success:false,
                message:"user is not found",
            })
        }
        if(user){
          const token= await checkPwd(req.body.password,user.password,{
            id:user._id,
            email:user.email,
           })
           res.status(201).send({
            success:true,
            message:"user is logged in successful",
            token:"Bearer "+token,
            user:user,
         })
        }else{
            res.send('something is worng!');
        }
        
    } catch (error) {
        res.send(error.message);
    }
}

module.exports={
    signupAuser,
    login
}