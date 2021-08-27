const reverseInt = (number) => {
    /* const op = number.toString().split('').reverse().join('')
    return Number(op)
   */
    if (typeof number !== 'number') {
        throw new Error('error')
    }
    else {
        return parseInt(
            number
              .toString()
              .split('')
              .reverse()
              .join('')
          ) * Math.sign(number)
    }
        
                 
}

console.log(reverseInt(897))

module.exports = {
    reverseInt
}