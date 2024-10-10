const express = require('express')
const router = express.Router()





// ! ===== model
const User = require('../model/user.js')
const Session = require('../model/session.js')
const Exercises = require('../model/session.js')
const isSignedIn = require('../middleware/isSignedIn.js')
const addSets = require('../public/javascript/Functions.js')
const session = require('express-session')









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


        res.redirect('/')

    } catch (error) {
        console.log(error)
        res.send('This post doesnt work')
    }
})




//! ===== Socials

//* ===== Render the socials

router.get('/index', isSignedIn, async (req, res, next) => {
    try {
        const user = await User.findById(req.session.user._id)

        
        const allSessions = await Session.find().populate('user')

        res.render('../views/sessions/index.ejs', { user: user, allSessions: allSessions })
    } catch (error) {
        console.log(error)
        res.send('Socials is not working')
    }
})











module.exports = router

//* ===== Delete the sessions
router.delete('/sessions/:sessionId', isSignedIn, async (req, res, next) => {
    try {
        const deletedSession = await Session.findById(req.params.sessionId)
        if (deletedSession.user.equals(req.session.user._id)) {
            await Session.findByIdAndDelete(req.params.sessionId)
            return res.redirect('/user/index')
        }
    } catch (error) {
        console.log(error)
        res.send('DELETE IS NOT WORKING')
    }
})

//* ===== Edit the session

//? ===== Render Edit Page
router.get('/sessions/:sessionId/edit', isSignedIn, async (req, res, next) => {

    try {

        const user = await User.findById(req.session.user._id)
        const session = await Session.findById(req.params.sessionId)

        res.render('../views/sessions/edit.ejs', { user: user, session: session })
    } catch (error) {
        console.log(error)
        res.send('EDIT IS NOT WORKING')
    }
})




//? ===== Edit Function

router.put('/sessions/:sessionId', async (req, res, next) => {

    try {
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
        
        const toUpdate = await Session.findByIdAndUpdate(
            req.params.sessionId,
            {$set: req.body}
        )



        console.log(toUpdate)
        console.log(req.body)
        return res.redirect(`/user/index`)
    } catch (error) {
        console.log(error)
        res.send('EDIT IS NOT WORKING')
    }
})









// const sessionToEdit = await Session.findById(req.params.sessionId)
// // const updatedSession = await Session.findByIdAndUpdate(req.params.sessionId, req.body)
// // const exercisesToUpdate = await sessionToEdit.exercises.id


// console.log(req.body)
// sessionToEdit.exercises.push(req.body)

// await sessionToEdit.save()

// res.redirect('/user/index')