const express = require('express')
const router = express.Router()





// ! ===== model
const User = require('../model/user.js')
const Session = require('../model/session.js')
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


router.post('/training-log', isSignedIn, async (req,res,next) => {
    try {
        req.body.user = req.session.user._id

        const newSession = await Session.create(req.body)
        console.log(req.body)

    }catch (error) {
        res.send('This post doesnt work')
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