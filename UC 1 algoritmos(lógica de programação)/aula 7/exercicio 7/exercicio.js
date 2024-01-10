function verificarValor() {
    var executar = true;
    while (executar) {
        var entradaValor = prompt("Digite um número válido");
        if (entradaValor !== null) {
            var valor = parseInt(entradaValor);
            if (valor < 0 || valor > 10) {
                valor = valor;
                alert("N\u00FAmero ".concat(valor, " \u00E9  inv\u00E1lido!"));
                executar = true;
            }
            else {
                executar = false;
                var numero = valor;
                alert("O n\u00FAmero ".concat(valor, " \u00E9 valido"));
            }
        }
    }
}
var exercicios = prompt(verificarValor);
