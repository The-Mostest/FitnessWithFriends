const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bcrypt = require('bcryptjs')




// ! =====  Imports
const User = require('../model/user.js')
const isSignedIn = require('../middleware/isSignedIn.js')





// ! ===== Sign in

// * Sign In Render

router.get('/sign-in', (req, res) => {
    try {

        res.render('./auth/sign-in.ejs')

    } catch (error) {
        res.send('Sign in isnt working')
    }
})


//* Sign In POST
router.post('/sign-in', async (req, res) => {


    const userExist = await User.findOne({ username: req.body.username })

    if (!userExist) {
        return res.send('Incorrect Username or Password')
    }

    const passwordExist = bcrypt.compareSync(
        req.body.password,
        userExist.password
    )

    if (!passwordExist) {
        return res.send('Incorrect Username or Password')
    }

    req.session.user = {
        username: userExist.username,
        _id: userExist._id
    }
    req.session.save(() => {
        res.redirect('/user/user-homepage')
    })



})






// ! ===== Sign up

//* ===== Sign Up Render

router.get('/sign-up', (req, res) => {
    try {

        res.render('auth/sign-up.ejs')

    } catch (error) {
        res.send('Sign Up isnt working')
    }
})


//* ===== Sign Up POST

router.post('/sign-up', async (req, res) => {
    try {

        const userInDB = await User.findOne({ username: req.body.username })

        if (userInDB) return res.send('This username already exists')

        const userEmail = await User.findOne({ email: req.body.email })
        if (userEmail) return res.send('This email is in use')

        if (req.body.password !== req.body.confirmPassword) {
            return res.send('These passwords do not match')
        }
        req.body.password = bcrypt.hashSync(req.body.password, 10)

        const newUser = await User.create(req.body)

        req.session.user = {
            username: newUser.username,
            _id: newUser._id
        }

        req.session.save(() => {
            res.redirect('/user/user-homepage')
        })
    } catch (error) {
        console.log(error)
        res.send('<h1>Sign up Not Working</h1>')
    }
})



//! ===== Sign Out
router.get('/sign-out', (req, res) => {
    req.session.destroy()
    res.redirect('/')
})





module.exports = router