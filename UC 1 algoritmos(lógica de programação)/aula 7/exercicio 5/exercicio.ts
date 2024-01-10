function saidaNumero() {

    let entradaNumeroUm: string | null = prompt("Digite um número: ");
    let numero_1 = parseFloat(entradaNumeroUm);

    let entradaNumeroDois: string | null = prompt("Digite outro número: ");
    let numero_2 = parseFloat(entradaNumeroDois);


    let entradaNumeroTres: string | null = prompt("Digite mais um número: ")
    let numero_3 = parseFloat(entradaNumeroTres)


    if (numero_1 > numero_2 && numero_1 > numero_3) {

        console.log(`O número ${numero_1} é maior que ambos os números ${numero_2} e ${numero_3}`);


    } else if (numero_2 > numero_1 && numero_2 > numero_3) {

       console.log( `O número ${numero_2} é maior que ambos os números ${numero_1} e ${numero_3}`)

    }if (numero_3 > numero_1 && numero_3 > numero_2)


    console.log( `O número ${numero_3} é maior que ambos os números ${numero_1} e ${numero_2}`)



}
saidaNumero()