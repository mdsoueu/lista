/* Celsius - Fahrenheit */
function graus(temperatura){
    let fahrenheit = (temperatura * 9/5) + 32;

    //console.log(fahrenheit);
    return fahrenheit;
}

module.exports = graus;