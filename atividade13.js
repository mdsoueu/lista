
function numero(numeros) {
    if (numero <= 1) {
        return [0];
    } else if (numero === 2) {
        return [0, 1];
    } else {
        const lista = [0, 1];
        for (let indice = 2; indice < numero; indice++) {
            const ultimo = numero[indice - 1]
            const penultimo = numero[indice - 2]
            const tot = penultimo + ultimo;
            lista.push(tot);
        }
    }
}


module.exports = numero;