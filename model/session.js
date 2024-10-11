const mongoose = require('mongoose')


// * ===== Sub Exercise

const exerciseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    reps: {type: Number, required: true},
    sets: {type: Number, required: true},
    load: {type: Number, required: true},
})



// * ===== Sub Comments

const commentSchema = new mongoose.Schema({
    text: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
},{
    timestamps: true,
})





// * ===== Session Schema
const sessionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    exercises: [exerciseSchema],
    notes: String,
    comments: [commentSchema]
},{
    timestamps: true,
})


const Session = mongoose.model('Session', sessionSchema)
// const Exercises = mongoose.model('Exercises',exerciseSchema)



module.exports = Session
// module.exports = Exercises