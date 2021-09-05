const reverseString = (str) => {
    if (typeof str !== 'string' || str.length <= 1 || str.length > 15) {
        throw new Error('error'); 
    }
    else {
        return str.split("").reverse().join("");
    }

}

module.exports = {
    reverseString
}