const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()




router.get('/', (req,res) => {
    try{
        res.send('User index it working')

    }catch(error){
    res.send('This User index isnt working')
}
})



router.get('/sign-in', (req,res) => {
    try{

        res.render('./auth/sign-in.ejs')

    }catch(error){
    res.send('Sign in isnt working')
}
})




router.get('/sign-up', (req,res) => {
    try{
        
        res.render('./auth/sign-up.ejs')
        
    }catch(error){
    res.send('Sign Up isnt working')
}
})










module.exports = router