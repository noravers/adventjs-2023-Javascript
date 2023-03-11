function checkPart(part) {
    let check = part.replace(' ', '').split('')
    return (check.some((e, i, array) => {
        let save = array.filter((_, index, array) => index != i)
        return (save.join('') == save.reverse().join(''))
    }))
}

module.exports = {checkPart}