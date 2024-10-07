const express = require('express')
const router = express.Router()



// ! ===== model
const User = require('../model/user.js')



router.get('/training', (req,res) => {
    res.render('../views/trainingLog.ejs')
})








module.exports = router