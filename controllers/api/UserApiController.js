const User = require('../../models/User')
const bcrypt = require('bcrypt')

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: 'email already exists' })
            } else {
                const newUser = new User({
                    email: req.body.email,
                    password: req.body.password
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err
                        newUser.password = hash
                        newUser.save()
                            .then(user => res.json(
                                {
                                    data: {
                                        email: user.email,
                                        password: user.password
                                    },
                                    code: 200,
                                    status: "ok"
                                }
                            ))
                            .catch(err => console.log(err))
                    })
                })
            }
        })
}
