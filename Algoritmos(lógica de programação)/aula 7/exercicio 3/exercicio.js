function somar(numeroUm, numeroDois) {
    var somar = numeroUm + numeroDois;
    return somar;
}
var numeroUm = prompt("Digite um número: ");
var numeroDois = prompt("Digite outro número: ");
if (numeroUm != null && numeroDois != null) {
    var numero1 = parseFloat(numeroUm);
    var numero2 = parseFloat(numeroDois);
    console.log("A soma dos dois n\u00FAmeros \u00E9 igual a ".concat(somar(numero1, numero2)));
}
