const user = require('./controllers/api/UserApiController')

module.exports = (app) =>{
    app.post('/api/user/signup', user.signup)
}