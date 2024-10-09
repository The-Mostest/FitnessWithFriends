const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')

const express = require('express')
const bcrypt = require('bcryptjs')
const MongoStore = require('connect-mongo')
const methodOverride = require('method-override')
const morgan = require('morgan')
const session = require('express-session')
const app = express()
const port = 3000



//! ===== Imports
const authRouters = require('./controllers/auth.js')
const userRouters = require('./controllers/user.js')
const userEverywhere = require('./middleware/userEverywhere.js')
const isSignedIn = require('./middleware/isSignedIn.js')
const addSets = require('./public/javascript/Functions.js')






//! ===== Middleware (app.use)
app.use(methodOverride('method'))
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
        collectionName: 'authSessions'
    })
}))


app.use('/auth', authRouters)
app.use('/user', userRouters)
app.use(userEverywhere)



//! ===== Landing Page

app.get('/', (req, res) => {
    try {
        if( req.session.user) {
            res.render('user-homepage.ejs')
        } else {
            res.render('index.ejs')
        }
    } catch (error) {
        res.send('This landing page is not working❌')
    }
})







//! ===== 404 Error

app.get('*', (req, res) => {
    res.send('😭 404 Error, This page is not available  😭')
})


const startServer = async () => {
    try {

        mongoose.connection.on("connected", () => {
            console.log('Mongoose Is Connected on MongoDB')
        })
        await mongoose.connect(process.env.MONGODB_URI)
        app.listen(port, () => {
            console.log(`${port} is working`)
        })
    } catch (error) {
        console.log(error)

    }
}

startServer()