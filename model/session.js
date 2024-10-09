const mongoose = require('mongoose')


// * ===== Sub Exercise

const exerciseSchema = new mongoose.Schema({
    name: String,
    reps: Number,
    sets: Number,
    load: Number,
})



// * ===== Sub Comments

const commentSchema = new mongoose.Schema({
    text: String,
    user: { type: mongoose.Types.ObjectId, ref: 'User' }
},{
    timestamps: true,
})





// * ===== Session Schema
const sessionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }, 
    exercises: [exerciseSchema],
    notes: String,
    comments: [commentSchema]
},{
    timestamps: true,
})


const Session = mongoose.model('Session', sessionSchema)


module.exports = Session