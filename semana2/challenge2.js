function divisibleByLeft(n) {
    //Implementación
    let a = n.toString().split(""); 
    let result = []; 
    a.map((x, y) => { 
        if(x % a[y-1] === 0){ 
            result.push(true); 
        } else { 
        result.push(false); } 
    }); 
    
    return result; 
}

module.exports = divisibleByLeft;