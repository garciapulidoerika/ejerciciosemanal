function keysAndValues(objInput) {
    const ordered = {};
    Object.keys(objInput).sort().forEach(function(key) {
    ordered[key] = objInput[key];
    });
   
    return [Object.keys(ordered), Object.values(ordered)];
}


module.exports = keysAndValues;