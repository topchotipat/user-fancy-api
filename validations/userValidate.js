const validator = require('validator')
const isEmpty = require('../utils/isEmpty')
const isString = require('../utils/isString')

module.exports = data => {
    const errors = []

    if(!isString(data.email)){
        errors.push('Email type is wrong')
    }else if (isEmpty(data.email)) {
        errors.push('Email is required')
    } else if (!validator.isEmail(data.email)) {
        errors.push('Email is invalid')
    }

    if(!isString(data.password)){
        errors.push('Password type is wrong')
    }else if (validator.isEmpty(data.password)) {
        errors.push('Password is required')
    } else if (!validator.isLength(data.password,{min: 8, max: 20})) {
        errors.push('Password is invalid')
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}