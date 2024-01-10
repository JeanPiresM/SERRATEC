
//EXERCICIO 2
function adicionarNumero(numeroLocal) {
    numeroLocal++;
    return numeroLocal;
}
function removerNumero(numeroLocal) {
    numeroLocal--;
    return numeroLocal;
}
var numeroA = 10;
var numeroB = 2;
while (numeroA > 5) {
    numeroA = numeroA - 4;
    if (numeroB > 0) {
        numeroB = removerNumero(numeroB);
    }
    numeroA = adicionarNumero(numeroA);
    console.log(numeroA);
}
