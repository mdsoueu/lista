/* Núm perfeito */

function numero(num1) {

    let guarda = 0;

    for (let i = 1; i < num1; i++) {
        if (num1 % i == 0) {
            guarda += i;
        }
    }

    if (guarda == num1) {
        // console.log(true);
        return true;
    } else {
        // console.log(false);
        return false;
    }
}

module.exports = numero;