function saidaNumero() {
    var entradaNumeroUm = prompt("Digite um número: ");
    var numero_1 = parseFloat(entradaNumeroUm);
    var entradaNumeroDois = prompt("Digite outro número: ");
    var numero_2 = parseFloat(entradaNumeroDois);
    var entradaNumeroTres = prompt("Digite mais um número: ");
    var numero_3 = parseFloat(entradaNumeroTres);
    if (numero_1 > numero_2 && numero_1 > numero_3) {
        console.log("O n\u00FAmero ".concat(numero_1, " \u00E9 maior que ambos os n\u00FAmeros ").concat(numero_2, " e ").concat(numero_3));
    }
    else if (numero_2 > numero_1 && numero_2 > numero_3) {
        console.log("O n\u00FAmero ".concat(numero_2, " \u00E9 maior que ambos os n\u00FAmeros ").concat(numero_1, " e ").concat(numero_3));
    }
    if (numero_3 > numero_1 && numero_3 > numero_2)
        console.log("O n\u00FAmero ".concat(numero_3, " \u00E9 maior que ambos os n\u00FAmeros ").concat(numero_1, " e ").concat(numero_2));
}
saidaNumero();
