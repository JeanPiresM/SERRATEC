/*let vetor: number[] = [1, 2, 3, 4, 5]

console.log(vetor)

vetor.forEach(Element => {


    console.log(Element)


});

for (let interacao = 0; interacao < 5; interacao++) {

    console.log(vetor[interacao])


}*/
/*
// Exercicio 1. 
//Construir um programa no qual, dentro deste software, tenha um vetor com dez
// valores dentro dele. O software irá escrever todos os valores que estão dentro deste vetor
 
let vetor:number[] = [1,2,3,4,5,6,7,8,9,10]

vetor.forEach(Element => {

console.log(Element)

});
*/


// Exercicio 2. 
//Construir um programa no qual ele escreverá, na tela, todos os valores de um vetor
// com 5 elementos númericos. O usuário deste programa escolherá um desses elementos e deverá
// trocar o valor por um outro número digitado
// Exemplo: valores do vetor: 9,3,2,6,8
// Qual posição do vetor você quer alterar
// <<Usuário digita o valor, exemplo 5>>
// O vetor agora é composto por 5,3,2,6,8.

/*let vetor: number[] = [2, 4, 6, 8, 10]

vetor.forEach(Element => {


    console.log(Element)


});

let entradaPosicao: string | null = prompt("Digite qual posição do vetor você quer alterar: ")

let entradaValor: string | null = prompt("Digite o valor para ser inserido no vetor: ")

if (entradaPosicao !== null && entradaValor !== null) {


    let posicao = parseInt(entradaPosicao);

    let valor = parseInt(entradaValor)

    for (let i = 0; i < 5; i++) {

        if (i == posicao) {

            vetor.splice(posicao, 1);

            vetor.unshift(valor)


vetor.forEach(Element => {


console.log(`O valor modificado do vetor é ${Element}`)


}



)
        }
    }
}*/

//Exercicio 3
//Construiu um programa no qual o usuário digitará cinco estados brasileiros e o
//programa irá exibir os valores que estão nas posições 0,2 e 4.

/*let estadosBrasileiros: string[] = [];

for(let i = 0 ; i < 5 ; i++){
let entradaEstadoBrasileiros = prompt("Informe o estado: ");

estadosBrasileiros[i] = entradaEstadoBrasileiros

}
for(let i = 0 ; i < estadosBrasileiros.length ; i++ ){

    if(i % 2 == 0){
console.log(`Posição ${i} --> ${estadosBrasileiros[i]} `);

    }
}
*/

//Exercicio 4
//Construir uma página na qual o usuário digitará dez números e o programa
//somará e calculará a média dos números digitados


let numerosMedia: number[] = []

let indice = 0;

let somaNumeros = 0;

let mediaNumeros = 0

for (let indice = 0; indice < 10; indice++) {


    let entradaNumerosMedia: string | null = prompt("Digite a sequencia de numeros para media")
    if (entradaNumerosMedia !== null) {
        
       
        numerosMedia[indice] = parseFloat(entradaNumerosMedia);
    
    mediaNumeros = somaNumeros + numerosMedia
    
    }
}
numerosMedia.forEach(Element =>{
console.log(Element)

});

mediaNumeros = somaNumeros / 10
console.log(`A média dos números informados é: ${mediaNumeros}`)

