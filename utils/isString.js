module.exports = value => {
    console.log('value', typeof value)
    if (typeof value === 'string') {
        return true
    } else {
        return false
    }
}