function mcm (a, b) {
  const maximoComunDivisor = (a, b) => {
    let temporal; //Para no perder b
    while (b !== 0) {
        temporal = b;
        b = a % b;
        a = temporal;
    }
    return a;
  };
  return (a * b) / maximoComunDivisor(a, b);
}
 

module.exports = mcm;