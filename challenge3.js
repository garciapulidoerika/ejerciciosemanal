const capitalizeLetters = (str) => {
    return str.toLowerCase()
            .trim()
            .split(' ')
            .map( v => v[0].toUpperCase() + v.substr(1) )
            .join(' ');  
}

console.log(capitalizeLetters('hola'))

module.exports = {
    capitalizeLetters
}