/* Ano bissexto */
function feveiro(ano) {

    let anoBissexto = ano % 4 == 0 && (ano % 100 != 0) || ano % 400 == 0;
    return anoBissexto;
}

module.exports = feveiro;