function selectSleigh(distance, sleighs) {
    let filtered = sleighs.filter((e, i) => {
        return parseFloat((e.consumption * distance)) <= 20
    })
    if (!!filtered.length) return filtered.pop().name
    else return ''
}

module.exports = { selectSleigh }
