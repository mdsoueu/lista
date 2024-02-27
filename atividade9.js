/* Fatorial de um número */

function numero(num1){

    let resultado = 1

    for(let i =1; i < num1; i++){
        resultado = resultado *= i;

        console.log(resultado);
        return resultado;
    }

    if(num1 == 0){
        console.log(1);
        return 1;
    }  else {
        let tela = num1 *(num1 - 1);
        return tela;
    }
}

module.exports = numero;