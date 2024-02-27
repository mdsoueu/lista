// Somar todos os elementos de um array

function soma(array) {

    if (array.length === 0) {
        console.log(0);
        return 0; // vazio
    } else {
        const somaValores = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log(somaValores);
        return somaValores;
    }
    

}
module.exports = soma;