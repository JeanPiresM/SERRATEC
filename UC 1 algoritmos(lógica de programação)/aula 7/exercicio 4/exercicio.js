function saidaNumero() {
    var entradaNumeroUm = prompt("Digite um número: ");
    var numero_1 = parseFloat(entradaNumeroUm);
    var entradaNumeroDois = prompt("Digite outro número");
    var numero_2 = parseFloat(entradaNumeroDois);
    if (numero_1 > numero_2) {
        console.log("O n\u00FAmero ".concat(numero_1, " \u00E9 maior que o n\u00FAmero ").concat(numero_2));
    }
    else {
        console.log("O n\u00FAmero ".concat(numero_1, " \u00E9 menor que o n\u00FAmero ").concat(numero_2));
    }
}
saidaNumero();
