function escolherExercicio() {
    var escolhaExercicio = prompt("Escolha o exercicio:\n" +
        "1- SOMA 2 NÚMEROS\n" +
        "2- COMPARANDO 2 NÚMEROS\n" +
        "3- COMPARANDO 3 NÚMEROS\n" +
        "4- PAR OU IMPAR\n" +
        "5- VALOR VÁLIDO\n");
    switch (escolhaExercicio) {
        //EXERCICIO COM UMA FUNÇÃO SOMANDO 2 NUMERO
        case "1":
            function somar(numeroUm, numeroDois) {
                var somar = numeroUm + numeroDois;
                return somar;
            }
            var numeroUm = prompt("Digite um número: ");
            var numeroDois = prompt("Digite outro número: ");
            if (numeroUm != null && numeroDois != null) {
                var numero1 = parseFloat(numeroUm);
                var numero2 = parseFloat(numeroDois);
                alert("A soma dos dois n\u00FAmeros \u00E9 igual a ".concat(somar(numero1, numero2)));
                break;
            }
        //EXERCICIO FUNÇÃO COMPARANDO 2 NUMEROS E DIZENDO QUAL É MAIOR
        case "2":
            function comparando2() {
                var entradaNumeroUm = prompt("Digite um número: ");
                var numero_1 = parseFloat(entradaNumeroUm);
                var entradaNumeroDois = prompt("Digite outro número");
                var numero_2 = parseFloat(entradaNumeroDois);
                if (numero_1 > numero_2) {
                    alert("O n\u00FAmero ".concat(numero_1, " \u00E9 maior que o n\u00FAmero ").concat(numero_2));
                }
                else {
                    alert("O n\u00FAmero ".concat(numero_1, " \u00E9 menor que o n\u00FAmero ").concat(numero_2));
                }
            }
            comparando2();
            break;
        //EXERCICIO COM UMA FUNÇÃO COMPARANDO 3 NUMEROS E DIZENDO QUAL É MAIOR
        case "3":
            function comparando3() {
                var entradaNumero1 = prompt("Digite um número: ");
                var numero01 = parseFloat(entradaNumero1);
                var entradaNumero2 = prompt("Digite outro número: ");
                var numero02 = parseFloat(entradaNumero2);
                var entradaNumero3 = prompt("Digite mais um número: ");
                var numero03 = parseFloat(entradaNumero3);
                if (numero01 > numero02 && numero01 > numero03) {
                    alert("O n\u00FAmero ".concat(numero01, " \u00E9 maior que ambos os n\u00FAmeros ").concat(numero02, " e ").concat(numero03));
                }
                else if (numero02 > numero01 && numero02 > numero03) {
                    alert("O n\u00FAmero ".concat(numero02, " \u00E9 maior que ambos os n\u00FAmeros ").concat(numero01, " e ").concat(numero03));
                }
                if (numero03 > numero01 && numero03 > numero02)
                    alert("O n\u00FAmero ".concat(numero03, " \u00E9 maior que ambos os n\u00FAmeros ").concat(numero01, " e ").concat(numero02));
            }
            comparando3();
            break;
        //EXERCICIO FAZENDO UMA FUNÇÃO QUE DIZ SE O NÚMERO É PAR OU IMPAR
        case "4":
            function parOuImpar(numeroLocal) {
                if (numeroLocal % 2 == 0) {
                    console.log("O n\u00FAmero ".concat(numeroLocal, " \u00E9 par! "));
                }
                else {
                    console.log("O n\u00FAmero ".concat(numeroLocal, " \u00E9 impar! "));
                }
            }
            var entrada_Numero = prompt("Digite o número para saber se ele é par ou impar: ");
            if (entrada_Numero !== null) {
                var numero0 = parseFloat(entrada_Numero);
                parOuImpar(numero0);
            }
            break;
        // EXERCICIO QUE FAZ UMA FUNÇÃO QUE PEDE UM VALOR VALIDO ATÉ VOCÊ DIGITA-LO
        case "5":
            function verificarValor() {
                var executar = true;
                return verificarValor;
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
            break;
    }
}
escolherExercicio();
