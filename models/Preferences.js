const mongoose = require('mongoose')
const Schema = mongoose.Schema

const preferencesSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

})

module.exports = Preferences = mongoose.model('preferences', preferencesSchema)