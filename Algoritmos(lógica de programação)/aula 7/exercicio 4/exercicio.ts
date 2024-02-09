function saidaNumero() {

    let entradaNumeroUm: string | null = prompt("Digite um número: ");
    let numero_1 = parseFloat(entradaNumeroUm);

    let entradaNumeroDois: string | null = prompt("Digite outro número");
    let numero_2 = parseFloat(entradaNumeroDois);


    if (numero_1 > numero_2) {

        console.log(`O número ${numero_1} é maior que o número ${numero_2}`);


    } else {

        console.log(`O número ${numero_1} é menor que o número ${numero_2}`);

    }
}
saidaNumero()