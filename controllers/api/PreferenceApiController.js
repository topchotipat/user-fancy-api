const Preference = require('../../models/Preference')
const validate = require('../../validations/preferenceValidate')

exports.preference = async (req, res, next) => {
    const user = req.user.id

    try {
        const pre = await Preference.findOne({ user })
        if (!pre) {
            res.status(404).json({
                error: 'User Preference not found',
                code: 404,
                status: 'Not found'
            })
        }
        res.json({
            data: {
                localization: pre.localization,
                privacy: pre.privacy,
                content: pre.content
            },
            code: 200,
            status: 'OK'
        })
    } catch (error) {
        next(error)
    }
}

exports.upsertPreference = async (req, res, next) => {
    const user = req.user.id
    try {
        const { errors, isValid } = await validate(req.body)
        if (!isValid) {
            res.status(400).json({
                error: errors,
                code: 400,
                status: 'Bad Request'
            })
        }

        const pre = await Preference.findOne({ user })
        if (pre) {
            Preference.findOneAndUpdate(
                { user },
                { $set: { ...req.body } },
                { new: true }
            ).then(() => {
                res.json({
                    code: 200,
                    status: 'OK'
                })
            })
        } else {
            new Preference({
                user: req.user.id,
                ...req.body
            }).save().then(() => {
                res.status(201).json({
                    code: 200,
                    status: 'OK'
                })
            })
        }
    } catch (error) {
        next(error)
    }
}