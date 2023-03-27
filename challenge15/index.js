function decorateTree(base) {
    function rec(arg) {
        let base2 = arg.split(' ')
        if (arg.length == 1) return arg
        let store = base2.reduce((acc, curr, i, arr) => {
            if (i < arr.length - 1) {
                if (curr == arr[i + 1]) return acc.concat(curr)
                let msg = `${curr}${arr[i + 1]}`
                if (curr == 'B') {
                    if (msg.includes('P')) return acc.concat('R')
                    if (msg.includes('R')) return acc.concat('P')
                }
                if (curr == 'R') {
                    if (msg.includes('P')) return acc.concat('B')
                    if (msg.includes('B')) return acc.concat('P')
                }
                if (curr == 'P') {
                    if (msg.includes('R')) return acc.concat('B')
                    if (msg.includes('B')) return acc.concat('R')
                }
            } else {
                return acc
            }
        }, []).join(' ')
        return [`${arg}`].concat(rec(store))
    }
    return rec(base).reverse()
}

module.exports = { decorateTree }