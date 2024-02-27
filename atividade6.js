// Contar a quantidade de vogais em uma string.

function soma(array) {

    let contar = 0; // guarda vogal
    let minusculo = array.toLowerCase(); // caso a primeira letra seja vogal

    for (let i = 0; i < minusculo.length; i++) {
        let total = array.charAt(i); // guarda as letras
        if (total === 'a' || total === 'e' || total === 'i' || total === 'o' || total === 'u') {
            contar++;
        } // valida se é vogal
    }

    console.log(contar);
    return contar;
}
module.exports = soma;