function distributeGifts(packOfGifts, reindeers) {
    let reindeersWeight = reindeers.reduce((a, c) => (a.length ? a.length : a) + (c.length ? c.length : 0)) * 2
    let packsWeight = packOfGifts.length > 1 ? (packOfGifts.reduce((a, c) => {
        return ((a.length ? a.length : a) + (c.length ? c.length : 0))
    })) : packOfGifts[0].length
    let result = Math.floor(reindeersWeight / packsWeight)
    return result > 0 ? result : 0
}

module.exports = {distributeGifts}