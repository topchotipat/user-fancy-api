const mongoose = require('mongoose')
const Schema = mongoose.Schema

const preferenceSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    localization: {
        language: {
            type: String,
            required: true
        },
        timeZone: {
            type: String,
            required: true
        },
        currency: {
            type: String,
            required: true
        }
    },
    privacy: {
        profileVisibility: {
            type: String,
            required: true
        },
        messages: {
            type: String,
            required: true
        }
    },
    content: {
        categoryLists: {
            type: String,
            required: true
        }
    }
})

module.exports = Preference = mongoose.model('preferences', preferenceSchema)