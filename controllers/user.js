const express = require('express')
const router = express.Router()



// ! ===== model
const User = require('../model/user.js')



router.get('/user-homepage', (req,res) => {
    try {
    res.render('../views/user-homepage.ejs')
}catch(error){
    console.log(error)
    res.send('User homepage is not working')
}
})








module.exports = router