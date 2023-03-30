function carryGifts(gifts, maxWeight) {

    return gifts.reduce((acc, curr, i, arr) => {
        let res;
        if (i == 0 && curr.length <= maxWeight) return [curr]
        if (curr.length > maxWeight) return acc
        if (i < arr.length && !!acc.length) {

            let noSpaces = [...acc[acc.length - 1]].filter(e => e != ' ').join('')
            if ((curr.length + (noSpaces.length)) <= maxWeight) {
                let save = acc[acc.length - 1]
                acc.pop()
                res = save.concat(` ${curr}`)
            } else {
                res = curr
            }
        } else {
            return [curr]
        }
        return [
            ...acc, res
        ]
    }, [])
}

module.exports = { carryGifts }