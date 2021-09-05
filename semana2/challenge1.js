function twoSums(numbs, target) {
    //Implementación
    const arraySize = numbs.length;

    for(let i = 0; i < arraySize; i++){

        for(let j= i + 1; j < arraySize; j++){
   
          if(target - numbs[i] === numbs[j]){
   
             return [i, j] 
           }
        }
     }
    return "target not found."
   
}

module.exports = twoSums;