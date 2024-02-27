
function palavras(palavra1, palavra2) {

    const palavra1organizada = palavra1.toLowerCase().split(' ').join().split('').sort().join();
    const palavra2organizada = palavra2.toLowerCase().split(' ').join().split('').sort().join();

    return palavra1organizada === palavra2organizada;
}


module.exports = palavras;