function isEqual(objInput1, objInput2) {
    const keys1 = Object.keys(objInput1);
    const keys2 = Object.keys(objInput2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (objInput1[key] !== objInput2[key]) {
      return false;
    }
  }

  return true;
}

module.exports = isEqual;