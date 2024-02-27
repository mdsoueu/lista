/* Positivo - Negativo - Zero */
function numero(num) {
    if (num < 0) {
        //console.log("negativo");
        return 'negativo';
    } else if (num > 0) {
        //console.log("positivo");
        return 'positvo';
    } else {
        //console.log("zero");
        return 'zero';
    }
}

module.exports = numero;