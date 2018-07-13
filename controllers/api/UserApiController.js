const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const key = require('../../config')

const time = new Date().getTime()

exports.signup = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    const signup_time = time

    if (!email || !password) {
        res.status(400).send({ error: 'user or password incorrect' })
    }
    try {
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ email: 'email already exists' })
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
        const user = await User.findOne({
            email
        })
        if (!user) {
            res.status(404).json({ email: 'email not found' })
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
            res.status(400).json({ password: 'password incorrect' })
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