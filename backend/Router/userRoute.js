const express=require('express');

const {signupAuser}  = require('../Controller/userController');
const avatarUpload = require('../Middleware/users/avatarUpload');

const router=express.Router();


router.post('/signup',avatarUpload, signupAuser);
router.get('/get-user');


module.exports=router;