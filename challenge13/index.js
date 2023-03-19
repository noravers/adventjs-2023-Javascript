function getFilesToBackup(lastBackup, changes) {
    const hasLastBackUp = changes.filter(e => e[1] > lastBackup).map(e => e[0])
    return Array.from(new Set(hasLastBackUp.sort((a, b) => a - b)))
}

module.exports = { getFilesToBackup }