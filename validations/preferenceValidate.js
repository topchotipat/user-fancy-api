const validator = require('validator')
const isEmpty = require('../utils/isEmpty')

module.exports = data => {
    let errors = {}

    if (isEmpty(data.email)) {
        errors.email = 'Email is required'
    } else if (!validator.isEmail(data.email)) {
        errors.email = 'Email is invalid'
    }

    if(!isString(data.password)){
        console.log('OKString')
        errors.password = 'Password type is wrong'
    }else if (isEmpty(data.password)) {
        errors.password = 'Password is required'
    } else if (!validator.isLength(data.password,{min: 8, max: 20})) {
        errors.password = 'Password is invalid'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}