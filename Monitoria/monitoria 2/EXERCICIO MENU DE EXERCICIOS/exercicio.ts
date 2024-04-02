function escolherExercicio(){


const escolhaExercicio: string | null = prompt(

    "Escolha o exercicio:\n" +
    "1- SOMA 2 NÚMEROS\n" +
    "2- COMPARANDO 2 NÚMEROS\n" +
    "3- COMPARANDO 3 NÚMEROS\n" +
    "4- PAR OU IMPAR\n"+
    "5- VALOR VÁLIDO\n"
)

switch(escolhaExercicio){
//EXERCICIO COM UMA FUNÇÃO SOMANDO 2 NUMERO

case "1":
function somar(numeroUm: number, numeroDois: number): number {

    let somar = numeroUm + numeroDois;

    return somar;
}

const numeroUm: number = prompt("Digite um número: ");

const numeroDois: number = prompt("Digite outro número: ");

if (numeroUm != null && numeroDois != null) {

    let numero1 = parseFloat(numeroUm)

    let numero2 = parseFloat(numeroDois)

    alert(`A soma dos dois números é igual a ${somar(numero1, numero2)}`);

    break;
}

//EXERCICIO FUNÇÃO COMPARANDO 2 NUMEROS E DIZENDO QUAL É MAIOR

case "2":
function comparando2() {

    let entradaNumeroUm: string | null = prompt("Digite um número: ");
    let numero_1 = parseFloat(entradaNumeroUm);

    let entradaNumeroDois: string | null = prompt("Digite outro número");
    let numero_2 = parseFloat(entradaNumeroDois);


    if (numero_1 > numero_2) {

       alert(`O número ${numero_1} é maior que o número ${numero_2}`);


    } else {

       alert(`O número ${numero_1} é menor que o número ${numero_2}`);
    }
}
comparando2()

break;


//EXERCICIO COM UMA FUNÇÃO COMPARANDO 3 NUMEROS E DIZENDO QUAL É MAIOR
case "3":

function comparando3() {

    let entradaNumero1: string | null = prompt("Digite um número: ");
    let numero01 = parseFloat(entradaNumero1);

    let entradaNumero2: string | null = prompt("Digite outro número: ");
    let numero02 = parseFloat(entradaNumero2);


    let entradaNumero3: string | null = prompt("Digite mais um número: ")
    let numero03 = parseFloat(entradaNumero3)


    if (numero01 > numero02 && numero01 > numero03) {

        alert(`O número ${numero01} é maior que ambos os números ${numero02} e ${numero03}`);


    } else if (numero02 > numero01 && numero02 > numero03) {

        alert(`O número ${numero02} é maior que ambos os números ${numero01} e ${numero03}`)

    } if (numero03 > numero01 && numero03 > numero02)


       alert(`O número ${numero03} é maior que ambos os números ${numero01} e ${numero02}`)

}
comparando3()
break;


//EXERCICIO FAZENDO UMA FUNÇÃO QUE DIZ SE O NÚMERO É PAR OU IMPAR

case "4":

function parOuImpar(numeroLocal: number): void {
    if (numeroLocal % 2 == 0) {

        console.log(`O número ${numeroLocal} é par! `);

    } else {
        console.log(`O número ${numeroLocal} é impar! `);

    }
}

let entrada_Numero: string | null = prompt("Digite o número para saber se ele é par ou impar: ");

if (entrada_Numero !== null) {

    const numero0 = parseFloat(entrada_Numero);

    parOuImpar(numero0)
}
break;

// EXERCICIO QUE FAZ UMA FUNÇÃO QUE PEDE UM VALOR VALIDO ATÉ VOCÊ DIGITA-LO

case "5":

function verificarValor(): void {

    let executar = true;


    while (executar) {

        let entradaValor: string | null = prompt("Digite um número válido")

        if (entradaValor !== null) {

            let valor = parseInt(entradaValor);

            if (valor < 0 || valor > 10) {

                valor = valor

                alert(`Número ${valor} é  inválido!`);

                executar = true

            }
            else {

                executar = false

                let numero: number = valor

                alert(`O número ${valor} é valido`)
            }
        }
    }
}
break;
}

}

escolherExercicio()
