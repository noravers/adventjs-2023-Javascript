function countHours(year, holidays) {
    return holidays.map(e => {
        let fecha = new Date(`${year}/${e}`).getDay();
        return (fecha === 0 || fecha === 6) ? 0 : 2
    }).reduce((p, c) => p + c)
}

module.exports = { countHours }