const express = require('express')
const router = express.Router()





// ! ===== model
const User = require('../model/user.js')



router.get('/user-homepage', async (req, res) => {
    try {
        const user = await User.findById(req.session.user._id)
        res.render('../views/user-homepage.ejs', {user: user})
    } catch (error) {
        console.log(error)
        res.send('User homepage is not working')
    }
})








module.exports = router