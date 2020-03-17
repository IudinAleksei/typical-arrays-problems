exports.min = function min(array) {
    if (!array || !array.length) {
        return 0
    }
    let min = +Infinity;
    array.forEach(item => {
        if (item < min) {
            min = item;
        }
    })
    return min;
}

exports.max = function max(array) {
    if (!array || !array.length) {
        return 0
    }
    let max = -Infinity;
    array.forEach(item => {
        if (item > max) {
            max = item;
        }
    })
    return max;
}

exports.avg = function avg(array) {
    if (!array || !array.length) {
        return 0
    }
    let avg = 0;
    array.forEach(item => {
        avg += item;
    })
    avg = avg / array.length;
    return avg;
}