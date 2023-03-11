function countTime(leds) {
    const arr = leds.join('').split('1')
    arr[0] += arr.pop()
    return Math.max(...arr.map(e => e.length)) * 7

}

module.exports = {countTime}
