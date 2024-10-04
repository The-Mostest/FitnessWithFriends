const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
    console.log('Mongoose Is Connected on MongoDB')
})
const express = require('express')
const bcrypt = require('bcryptjs')
const connectMongo = require('connect-mongo')
const ejs = require('ejs')
const methodOverride = require('method-override')
const morgan = require('morgan')
const session = require('express-session')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`${port} is working`)
})


//! ===== Router Controllers
const authRouters = require('./controllers/auth.js')
app.use('/auth', authRouters)


//! ===== Models





//! ===== Middleware (app.use)
app.use(express.static('public'))



//! ===== Landing Page

app.get('/', (req,res) => {
    try {
    res.render('index.ejs')
}catch(error){
    res.send('This landing page is not working❌')
}

})



//! ===== 404 Error

app.get('*', (req,res) => {
    res.send('😭 404 Error, This page is not available  😭')
})