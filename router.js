const user = require('./controllers/api/UserApiController')
const preference = require('./controllers/api/PreferenceApiController')
const passport = require('passport')
require('./services/passport')(passport)

const requireAuth = passport.authenticate('jwt', { session: false })

module.exports = (app) => {
    // User
    app.post('/api/user/signup', user.signup)
    app.post('/api/user/login', user.login)
    app.get('/api/user', requireAuth, user.user)

    // Preference
    app.get('/api/preference', requireAuth, preference.preference)
    app.post('/api/preference', requireAuth, preference.upsertPreference)
}