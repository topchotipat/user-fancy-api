const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    signup_time:{
        type: Date,
        required: true
    }
})

module.exports = User = mongoose.model('users', userSchema)