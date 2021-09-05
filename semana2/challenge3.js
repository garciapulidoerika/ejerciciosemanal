function arrayOfMultiples (num, length) {
    const result = [];
    for(let i = num; i <= num * length; i += num){
        result.push(i);
    };

    return result;
}

module.exports = arrayOfMultiples;