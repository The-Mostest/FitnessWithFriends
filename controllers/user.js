const express = require('express')
const router = express.Router()





// ! ===== model
const User = require('../model/user.js')
const Session = require('../model/session.js')
const isSignedIn = require('../middleware/isSignedIn.js')
const addSets = require('../public/javascript/Functions.js')






// //! ===== User Homepage
// router.get('/user-homepage', isSignedIn, async (req, res, next) => {
//     try {
//         const user = await User.findById(req.session.user._id)
//         res.render('../views/user-homepage.ejs', {user: user})
//     } catch (error) {
//         console.log(error)
//         res.send('User homepage is not working')
//     }
// })





//! ===== Training Log
router.get('/sessions', isSignedIn, async (req, res, next) => {
    try {
        const user = await User.findById(req.session.user._id)

        res.render('../views/sessions/new.ejs', {user: user})
    } catch (error) {
        console.log(error)
        res.send('Training is not working')
    }
})


// Create Session

router.post('/sessions', isSignedIn, async (req,res,next) => {
    try {
        // Link the session to the user
        req.body.user = req.session.user._id

        const newSession = new Session()

        newSession.exercises.push(req.body)


        console.log(req.body)
        await newSession.save()
        
        // res.redirect('')
    }catch (error) {
        res.send('This post doesnt work')
    }
})






//! ===== Socials

router.get('/index', isSignedIn, async (req, res, next) => {
    try {
        const user = await User.findById(req.session.user._id)
        res.render('../views/sessions/index.ejs', {user: user})
    } catch (error) {
        console.log(error)
        res.send('User homepage is not working')
    }
})






module.exports = router