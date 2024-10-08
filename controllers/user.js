const express = require('express')
const router = express.Router()





// ! ===== model
const User = require('../model/user.js')
const isSignedIn = require('../middleware/isSignedIn.js')
const addSets = require('../public/javascript/Functions.js')






//! ===== User Homepage
router.get('/user-homepage', isSignedIn, async (req, res, next) => {
    try {
        const user = await User.findById(req.session.user._id)
        res.render('../views/user-homepage.ejs', {user: user})
    } catch (error) {
        console.log(error)
        res.send('User homepage is not working')
    }
})





//! ===== Training Log
router.get('/training-log', isSignedIn, async (req, res, next) => {
    try {
        const user = await User.findById(req.session.user._id)

        res.render('../views/trainingLog.ejs', {user: user})
    } catch (error) {
        console.log(error)
        res.send('User homepage is not working')
    }
})









//! ===== Socials

router.get('/socials', isSignedIn, async (req, res, next) => {
    try {
        const user = await User.findById(req.session.user._id)
        res.render('../views/socials.ejs', {user: user})
    } catch (error) {
        console.log(error)
        res.send('User homepage is not working')
    }
})






module.exports = router