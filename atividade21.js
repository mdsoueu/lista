function main(palavras, acronimo) {
    let comparar = '';

    for (let i = 0; i < palavras.length; i++) {
        const palavra = palavras[i];
        const primeiraLetra = palavra.charAt(0);
        comparar += primeiraLetra;
    }
    return comparar.toLocaleLowerCase() === acronimo.toLocaleLowerCase();
}

console.log(main(['Hello', 'World'], 'HW'));