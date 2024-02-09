function parOuImpar(numeroLocal) {
    if (numeroLocal % 2 == 0) {
        console.log("O n\u00FAmero ".concat(numeroLocal, " \u00E9 par! "));
    }
    else {
        console.log("O n\u00FAmero ".concat(numeroLocal, " \u00E9 impar! "));
    }
}
var entradaNumero = prompt("Digite o número para saber se ele é par ou impar: ");
if (entradaNumero !== null) {
    var numero = parseFloat(entradaNumero);
    parOuImpar(numero);
}
