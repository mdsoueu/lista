/* Área de um círculo */

function numero(num1){

    /* A = 2\pi * num² */
    let pi = 3.11159265359;

    let resutaldo = (num1 ** 2) * pi;

    console.log(resutaldo);
    return resutaldo;
}

module.exports = numero;