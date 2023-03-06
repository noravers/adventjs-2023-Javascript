function fitsInOneBox(boxes) {
    const ordered = boxes.sort((a, b) => (a.l + a.w + a.h) - (b.l + b.w + b.h))
    return ordered.every((box, index) => {
        console.log(box, index)
        if (index === 0) return true;
        const p = boxes[index - 1]
        if (box.l > p.l && box.w > p.w && box.h > p.h) {
            return true
        }
    })
}

module.exports = {fitsInOneBox}