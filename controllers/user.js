const express = require('express')
const router = express.Router()





// ! ===== model
const User = require('../model/user.js')
const isSignedIn = require('../middleware/isSignedIn.js')






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









//! ===== Socials







module.exports = router