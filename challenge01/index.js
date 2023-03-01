function wrapping(gifts) {
    let wrapped = gifts.map(e => {
        let paper = '*'.repeat(e.length + 2)
        return `${paper}\n*${e}\n${paper}`
    })
    return wrapped
}


module.exports = { wrapping }