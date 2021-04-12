const isLowercase = (password, index) => {}
const isUppercase = (password, index) => {}
const isNumeric = (password, index) => {
    return !isNaN(password[index])
}
const validatePassword = (password) => {
    if (password.length < 8) return false

    let upper = 0
    let lower = 0
    let numeric = 0
    let special = 0

    for(i=0; i < password.length; i++) {
        if (isLowercase(password, i)) {
            lower++
            // Must contain at least one lower case letter
        } else if (isUppercase(password, i)) {
            upper++
            // Must contain at least one upper case letter
        } else if (isNumeric(password, i)) {
            numeric++
            // Must contain at least one numeric value
        } else {
            special++
            // Must contain at least one special character
        }
        return lower > 0 && upper > 0 && numeric > 0 && special > 0
    }
}
    //returns true when all requirements are met

module.exports = validatePassword