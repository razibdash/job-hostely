const express=require('express');

const {signupAuser, login}  = require('../Controller/userController');

const router=express.Router();


router.post('/signup',signupAuser);
router.post('/login',login);
router.get('/get-user');


module.exports=router;