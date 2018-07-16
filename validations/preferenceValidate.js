const isEmpty = require('../utils/isEmpty')
const isPreference = require('../utils/isPreferences')

module.exports = data => {
    let errors = []

    if (isEmpty(data.localization.language)) {
        errors.push('Language is required')
    } else if (!isPreference.language(data.localization.language)) {
        errors.push('Language is invalid')
    }

    if (isEmpty(data.localization.timeZone)) {
        errors.push('TimeZone is required')
    } else if (!isPreference.timeZone(data.localization.timeZone)) {
        errors.push('TimeZone is invalid')
    }

    if (isEmpty(data.localization.currency)) {
        errors.push('Currency is required')
    } else if (!isPreference.currency(data.localization.currency)) {
        errors.push('Currency is invalid')
    }

    if (isEmpty(data.privacy.profileVisibility)) {
        errors.push('Profile Visibility is required')
    } else if (!isPreference.profileVisibility(data.privacy.profileVisibility)) {
        errors.push('Profile Visibility is invalid')
    }

    if (isEmpty(data.privacy.messages)) {
        errors.push('Messages is required')
    } else if (!isPreference.messages(data.privacy.messages)) {
        errors.push('Messages is invalid')
    }

    if (isEmpty(data.content.categoryLists)) {
        errors.push('Category lists is required')
    } else if (!isPreference.categoryLists(data.content.categoryLists)) {
        errors.push('Category lists is invalid')
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}