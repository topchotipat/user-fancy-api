const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
const User = mongoose.model('users')
const key = require('../config')

const opts = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: key.secretOrKey
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, async (jwt_payload, done) => {
            try {
                const user = await User.findById(jwt_payload.id)
                if (user) {
                    done(null, user)
                }
                done(null, false)
            } catch (error) {
                done(error, false)
            }
        })
    )
}

