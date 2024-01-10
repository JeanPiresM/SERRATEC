function parOuImpar(numeroLocal: number): void {
    if (numeroLocal % 2 == 0) {

        console.log(`O número ${numeroLocal} é par! `);

    }else {
        console.log(`O número ${numeroLocal} é impar! `);

    }
}

let entradaNumero: string | null = prompt("Digite o número para saber se ele é par ou impar: ");

if (entradaNumero !== null) {

    const numero = parseFloat(entradaNumero);

    parOuImpar(numero)

}




