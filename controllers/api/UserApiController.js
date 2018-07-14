const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const key = require('../../config')
const validate = require('../../validations/userValidate')

const time = new Date().getTime()

exports.signup = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    const signup_time = time

    try {
        const { errors, isValid } = await validate(req.body)
        if (!isValid) {
            res.status(400).json({
                error: errors,
                code: 400,
                status: 'Bad Request'
            })
        }
    
        const user = await User.findOne({ email })
        if (user) {
            res.status(400).json({
                error: {
                    email: 'Email already exists'
                },
                code: 400,
                status: 'Bad Request'
            })
        } else {
            const newUser = new User({
                email,
                password,
                signup_time
            })

            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(newUser.password, salt)

            newUser.password = hash
            const genUser = await newUser.save()

            res.json(
                {
                    data: {
                        email,
                        password: genUser.password,
                        signup_time
                    },
                    code: 200,
                    status: 'OK'
                }
            )
        }
    } catch (error) {
        next(error)
    }
}

exports.login = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
   
    try {
        const { errors, isValid } = await validate(req.body)

        if (!isValid) {
            res.status(400).json({
                error: errors,
                code: 400,
                status: 'Bad Request'
            })
        }

        const user = await User.findOne({
            email
        })
        if (!user) {
            res.status(404).json({
                error: {
                    email: 'email not found'
                },
                code: 404,
                status: 'Not Found'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const payload = { id: user.id, email, time }
            jwt.sign(
                payload,
                key.secretOrKey,
                { expiresIn: '30m' },
                (_, token) => {
                    res.json({
                        data: {
                            email,
                            token,
                            logged_in_at: time
                        },
                        code: 200,
                        status: 'OK'
                    })
                }
            )
        } else {
            res.status(400).json({
                error: {
                    password: 'password is invalid'
                },
                code: 400,
                status: 'Bad Request'
            })
        }
    } catch (error) {
       next(error)
    }
}

exports.user = (req, res) => {
    res.json({
        user: req.user
    })
}