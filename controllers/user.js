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

        res.render('../views/sessions/new.ejs', { user: user })
    } catch (error) {
        console.log(error)
        res.send('Training is not working')
    }
})


// Create Session

router.post('/sessions', isSignedIn, async (req, res, next) => {
    try {

        // Link the session to the user

        if (Array.isArray(req.body.name)) {
            req.body = {
                exercises: req.body.name.map((name, idx) => {
                    return {
                        name: name,
                        reps: req.body.reps[idx],
                        sets: req.body.sets[idx],
                        load: req.body.load[idx]
                    }
                })
            }
        } else {
            req.body = {
                exercises: [{
                    name: req.body.name,
                    reps: req.body.reps,
                    sets: req.body.sets,
                    load: req.body.load
                }]
            }
        }

        req.body.user = req.session.user._id

        // Creating the session from and filling the field in 
        const newSession = await Session.create(req.body)


        console.log(newSession)

        res.redirect('/sessions')

    } catch (error) {
        console.log(error)
        res.send('This post doesnt work')
    }
})






//! ===== Socials

router.get('/index', isSignedIn, async (req, res, next) => {
    try {
        const user = await User.findById(req.session.user._id)
        res.render('../views/sessions/index.ejs', { user: user })
    } catch (error) {
        console.log(error)
        res.send('User homepage is not working')
    }
})






module.exports = router