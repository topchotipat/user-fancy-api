const Preference = require('../../models/Preference')

exports.preference = async (req, res, next) => {
    const user = req.user.id

    try {
        const pre = await Preference.findOne({ user })
        if (!pre) {
            res.status(404).json({ error: 'no pre' })
        }
        res.json(pre)
    } catch (error) {
        next(error)
    }
}

exports.upsertPreference = async (req, res, next) => {
    const user = req.user.id
    try {
        const pre = await Preference.findOne({ user })
        if (pre) {
            Preference.findOneAndUpdate(
                { user },
                { $set: { ...req.body } },
                { new: true }
            ).then(update => {
                res.json({
                    data: {
                        localization: update.localization,
                        privacy: update.privacy,
                        content: update.content
                    },
                    code: 200,
                    status: 'OK'
                })
            })
        } else {
            new Preference({
                user: req.user.id,
                ...req.body
            }).save().then(create => {
                res.status(201).json({
                    data: {
                        localization: create.localization,
                        privacy: create.privacy,
                        content: create.content
                    },
                    code: 200,
                    status: 'OK'
                })
            })
        }
    } catch (error) {
        next(error)
    }
}