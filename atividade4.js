function quatro(num1) {

    if (num1 < 0) {
        console.log(false);
        return false;
    } else if (num1 > 0) {
        // Se o resto da divisão for zero o número não é primo
        for (let i = 2; i <= Math.sqrt(num1); i++) {
            if (num1 % i === 0) {
                console.log(false);
                return false;
            }
        }
        // Se não foi encontrado nenhum divisor além de 1 e ele mesmo, então é primo
        console.log(true);
        return true;
    }

}
module.exports = quatro;