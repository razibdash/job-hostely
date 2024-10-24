const bcrypt=require('bcrypt');
const User = require('../Model/UserModel');
const {hashedPwd}=require("../config/utility");



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

const login=async(req,res)=>{
    try {
        const email=req.body.email;
        const findUser= await User.findOne({email});
        if(!findUser) return res.send("something is worng");
        if(findUser.email){
            bcrypt.compare(req.body.password,findUser.password,(err,result)=>{
               if(!err){
                   res.send(result);
               }else{
                 res.send("something is worng!");
               }
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