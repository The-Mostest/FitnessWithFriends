const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()



// ! ===== model
const User = require('../models/user.js')



router.get('/', (req,res) => {
    try{
        res.send('User index it working')

    }catch(error){
    res.send('This User index isnt working')
}
})







// ! ===== Sign in

// * Sign In Render

router.get('/sign-in', (req,res) => {
    try{

        res.render('./auth/sign-in.ejs')

    }catch(error){
    res.send('Sign in isnt working')
}
})









// ! ===== Sign up

//* ===== Sign Up Render

router.get('/sign-up', (req,res) => {
    try{

        res.render('./auth/sign-up.ejs')
        
    }catch(error){
    res.send('Sign Up isnt working')
}
})

//* ===== Sign up Post
//TODO      Search the Database to check the username is unique
//TODO      If it isn't already made, allow the process to continue
//TODO      Check passwords match
//TODO      Encrypt the passwords
//TODO      Create User
//TODO      req.session the details
//TODO      Save the session and then redirect

router.post('/sign-up', async (req,res) => {

})








module.exports = router