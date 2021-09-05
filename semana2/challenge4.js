function landMass(name, countrymass) {

    const totalMass = 148940000;
    const area = (countrymass * 100   / totalMass).toFixed(2);
    let aja = {
        "percent": parseFloat(area),
        "message": `${name} representa el ${area}% de la masa de la tierra`
    }

    if (typeof name === 'string') {   
        return aja;
    }
    
}

module.exports = landMass;