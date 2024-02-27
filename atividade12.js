/* Menor núm. em uma lista */

function numero(numeros) {
    let menor = 99999999;
    for (const numero of numeros) {
        if (numero < menor) {
            menor = numero;
        }
    }
    return menor;
}

module.exports = numero;