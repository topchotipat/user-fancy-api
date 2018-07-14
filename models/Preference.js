const mongoose = require('mongoose')
const Schema = mongoose.Schema

const preferenceSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    localization:{
        language: {
            type: String
        },
        timeZone: {
            type: Date
        },
        currency:{
            type: String
        }
    },
    privacy:{
        profileVisibility:{
            type: String
        },
        messages:{
            type: String
        }
    },
    content:{
        categoryLists:{
            type: Boolean
        }
    }
})

module.exports = Preference = mongoose.model('preferences', preferenceSchema)