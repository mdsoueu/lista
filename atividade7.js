/* Média ponderada */
function notas(nota1, nota2, nota3){
    let media = (1*nota1 + 2*nota2 + 3*nota3) / 1+2+3;

    //console.log(media);
    return media;
}

module.exports = notas;