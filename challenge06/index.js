function createCube(size) {
    let head = []
    let tail = []
    let index = 1
    while (index <= size) {
        head.push(' '.repeat(size - index) + '/\\'.repeat(index) + '_\\'.repeat(size));
        tail.push(' '.repeat(index - 1) + '\\/'.repeat(size - (index - 1)) + '_/'.repeat(size))
        index++;
    }
    return head.concat(tail).join("\n")
}

module.exports = {createCube}