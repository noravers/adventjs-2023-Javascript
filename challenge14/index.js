function getOptimalPath(path) {

    function recursive(row, column) {
        if (path[row] === undefined || path[row][column] === undefined) return 0
        return path[row][column] + Math.min(recursive(row + 1, column), recursive(row + 1, column + 1))
    }
    return recursive(0, 0)
}

module.exports = { getOptimalPath }