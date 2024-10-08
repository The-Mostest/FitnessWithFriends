const mongoose = require('mongoose')


const sessionSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})


const User = mongoose.model('User', userSchema)


module.exports = User