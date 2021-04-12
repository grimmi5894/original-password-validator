const isLowercase = (password, index) => {
    return (password.charCodeAt(index) >= 97 && password.charCodeAt(i) <= 122)
}
const isUppercase = (password, index) => {
    return (password.charCodeAt(index) >= 65 && password.charCodeAt(i) <= 90)
}
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
        } else if (isUppercase(password, i)) {
            upper++
        } else if (isNumeric(password, i)) {
            numeric++
        } else {
            special++
        }
    }
    return lower > 0 && upper > 0 && numeric > 0 && special > 0
}
module.exports = validatePassword