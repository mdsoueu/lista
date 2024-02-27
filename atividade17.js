/* MDC - Minimo Divior Comum*/

function numero(m, n){

    let divisor;

    /* valido se o núm. não é 0(zero) */
    if(m == 0){
        // console.log(n);
        return n;
    } else if(n == 0){
        // console.log(m);
        return m;
    }

    do {
        divisor = m % n;

        m = n;
        n = divisor;

    } while (divisor != 0);

    // console.log(m);
    return m;
}

module.exports = numero;