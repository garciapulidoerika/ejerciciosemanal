function minMax(aNumbs) {
    let min = Math.min.apply(null, aNumbs);
    let max = Math.max.apply(null, aNumbs);
    return {"max": max, "min": min};
}

module.exports = minMax;