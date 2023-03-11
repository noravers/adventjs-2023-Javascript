function getGiftsToRefill(a1, a2, a3) {
    const allGifts = Array.from(new Set([...a1, ...a2, ...a3]))
    const result = allGifts.reduce((acc, curr) =>
        (a1.includes(curr) +
            a2.includes(curr) +
            a3.includes(curr)
            === 1)
            ? [...acc, curr] : acc

        , [])
    return result
}

module.exports = {getGiftsToRefill}