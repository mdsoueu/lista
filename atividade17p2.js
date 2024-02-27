// function main(num1, num2) {

//     while (num2 !== 0) {

//         let tempNumero2 = num2;
//         console.log(tempNumero2);
//         num2 = num1 % num2
//         console.log(num2);
//         num1 = tempNumero2;
//         console.log(num1);

//     }
//     return num1;

// }

function main(num1, num2) {

    if(num2 === 0){
        return num1;
    } else{
        returnmain(num2, num1%num2);
    }

}
console.log(main(12, 15));
