const user = require('./controllers/api/UserApiController')
const passport = require('passport')
require('./services/passport')(passport)

const requireAuth = passport.authenticate('jwt', { session: false})

module.exports = (app) => {
    app.post('/api/user/signup', user.signup)
    app.post('/api/user/login', user.login)
    app.get('/api/user', requireAuth, user.user)
}