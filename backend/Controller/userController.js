
const User = require('../Model/UserModel');

const signupAuser=async(req,res)=>{
    try {
        const pic=req.file.filename;
        console.log(pic);
        const {firstName,lastName,email,phone,password}=req.body;
        // const newUser=new User({firstName,lastName,phone,email,password,pic});
        // await newUser.save();
        res.status(200).json(pic);
    } catch (error) {
        res.status(500).json({error:error.message});
        console.log("error",error);
    }
}



module.exports={
    signupAuser,
}