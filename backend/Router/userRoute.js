const express=require('express');

const { signupAuser } = require('../Controller/userController');
const avatarUpload = require('../Middleware/users/avatarUpload');
const { avatarValidation } = require('../Middleware/users/validationCheck');
const router=express.Router();


router.post('/signup',avatarUpload,avatarValidation,signupAuser);
router.get('/get-user');


module.exports=router;