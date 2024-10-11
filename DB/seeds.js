// ! Imports
const mongoose = require('mongoose')
require('dotenv/config')
 
// ! Models
const User = require('../model/user.js')
const Session = require('../model/session.js')


//  !   Run seed

const runseed = async () => {


//  Connect to DB
await mongoose.connect(process.env.MONGODB_URI)
console.log('Connected')


//  Clear Existing Data
const deletedSession = await Session.deleteMany()
    console.log(`${deletedSession.deletedCount} Sessions Deleted`)

// Clear Existing Users
const deletedUser = await User.deleteMany()
    console.log(`${deletedUser.deletedCount} Users Deleted`)




//  close connection
await mongoose.connection.close()
console.log('Disconnected')

}
runseed ()