const signup = require('./controllers/api/user/signup')

module.exports = (app) =>{
    app.get('/api/user/signup', signup)
}