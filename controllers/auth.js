const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()



// ! ===== model
const User = require('../model/user.js')



router.get('/', (req, res) => {
    try {
        res.send('User index it working')

    } catch (error) {
        res.send('This User index isnt working')
    }
})







// ! ===== Sign in

// * Sign In Render

router.get('/sign-in', (req, res) => {
    try {

        res.render('./auth/sign-in.ejs')

    } catch (error) {
        res.send('Sign in isnt working')
    }
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
            res.redirect('/')
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