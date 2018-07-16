exports.language = (value) => {
    const language = ['English', 'Spanish', 'Arabic', 'Portuguese', 'Russian', 'Japanese', 'German', 'French', 'Thai', 'Dutch']
    const data = language.find(data => {
        if (data === value) {
            return true
        }
    })
    return data
}

exports.timeZone = (value) => {
    const timeZone = [
        {
            name: '(UTC+00:00) UTC',
            time: '0.0'
        },
        {
            name: '(UTC-01:00) UTC',
            time: '-1.0'
        },
        {
            name: '(UTC-02:00) UTC',
            time: '-2.0'
        },
        {
            name: '(UTC-03:00) UTC',
            time: '-3.0'
        },
        {
            name: '(UTC-03:30) UTC',
            time: '-3.5'
        },
        {
            name: '(UTC-04:00) UTC',
            time: '-4.0'
        },
        {
            name: '(UTC-05:00) UTC',
            time: '-5.0'
        },
        {
            name: '(UTC-06:00) UTC',
            time: '-6.0'
        },
        {
            name: '(UTC-07:00) UTC',
            time: '-7.0'
        },
        {
            name: '(UTC-08:00) UTC',
            time: '-8.0'
        },
    ]
    const data = timeZone.find(data => {
        if (data.time === value) {
            return true
        }
    })
    return data
}

exports.currency = (value) => {
    const currency = [
        {
            name: 'U.S. dollars ($)',
            currency: 'dollars'
        },
        {
            name: 'Cent (¢)',
            currency: 'cent'
        },
        {
            name: 'Pound (£)',
            currency: 'pound'
        },
        {
            name: 'Yen (¥)',
            currency: 'yen'
        },
        {
            name: 'Franc (₣)',
            currency: 'franc'
        },
        {
            name: 'Lira (₤)',
            currency: 'lira'
        },
        {
            name: 'Euro (€)',
            currency: 'euro'
        },
        {
            name: 'Rupee (₹)',
            currency: 'rupee'
        },
        {
            name: 'Won (₩)',
            currency: 'won'
        },
        {
            name: 'Peso (₱)',
            currency: 'peso'
        },
    ]
    const data = currency.find(data => {
        if (data.currency === value) {
            return true
        }
    })
    return data
}

exports.profileVisibility = (value) => {
    const profileVisibility = ['everyone', 'private']
    const data = profileVisibility.find(data => {
        if (data === value) {
            return true
        }
    })
    return data
}

exports.messages = (value) => {
    const messages = ['everyone', 'follow', 'private']
    const data = messages.find(data => {
        if (data === value) {
            return true
        }
    })
    return data
}

exports.categoryLists = (value) => {
    const categoryLists = ['enable', 'disable']
    const data = categoryLists.find(data => {
        if (data === value) {
            return true
        }
    })
    return data
}