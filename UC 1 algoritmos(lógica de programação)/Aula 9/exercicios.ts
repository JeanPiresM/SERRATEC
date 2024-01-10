//Exemplo de matriz

/*let matriz: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for (let linha = 0; linha < 3; linha++) {

    for (let coluna = 0; coluna < 3; coluna++) {
        console.log(matriz[linha][coluna])


    }
}*/

//Exercicio 1
//Construir um programa que contenha uma matriz 4x3 e o programa deverá escrever todos os valores contidos
// nessa matriz
/*
let matriz: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
]



for (let linha = 0; linha < 4; linha++) {
   
    for (let coluna = 0; coluna < 3; coluna++) {
        
        console.log(matriz[linha][coluna]);
    
    }
}*/

//Exercicio 2
//Construir um programa que contenha uma matriz 3x3 e o usuário irá escolher uma linha para
//visualizar os valores que contenham nesta linha da matriz

/*
let matriz: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for (let linha = 0; linha < 3; linha++) {

   
for (let coluna = 0; coluna < 3; coluna++) {
    
}
}
let linhaDesejada = prompt("Digite a linha da qual os valores deseja vizualizar")

console.log(matriz[linhaDesejada])
*/

//Exercicio 3
//Construir um programa no qual o usuário digitará valores em uma matriz 4x4 e o programa
//irá escrever a soma dos valores de cada linha e de cada coluna

/*
let matriz: number[][] = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

let somaLinhas = [0, 0, 0, 0]
let somaColunas = [0, 0, 0, 0]


for (let linha = 0; linha < 4; linha++) {

    for (let coluna = 0; coluna < 4; coluna++) {

        let entradaMatriz: string | null = prompt(`Insira o valor da posição [${linha + 1}] [${coluna + 1}]`)

        if (entradaMatriz !== null) {
            matriz[linha][coluna] = parseInt(entradaMatriz)

        }

    }
}
for (let linha = 0; linha < 4; linha++) {
    for (let coluna = 0; coluna < 4; coluna++) {

        somaLinhas[linha] += matriz[linha][coluna];
        somaColunas[coluna] += matriz[linha][coluna];

    }
}
console.log("Soma das linhas:");

for (let linha = 0; linha < 4; linha++) {
    console.log(somaLinhas[linha])
}


console.log("Soma das colunas: ");

for (let coluna = 0; coluna < 4; coluna++) {

    console.log(somaColunas[coluna])

}*/

//Exercicio 4

//Fazer um programa, que contenha duas matrizes 2x2 e o programa escreverá na tela 
//qual matriz tem a soma de seus valores um número maior.

/*
function calcularMatriz(matriz: number [][]): number[]{

let somaMatriz = 0;

for(let linha = 0; linha < matriz.length;linha++){

for(let coluna = 0; coluna < matriz.length; coluna++){

somaMatriz += matriz[linha][coluna]


}


}
return somaMatriz;
}
let matriz_1: number [][] = [[5,6] , [1,3]];

let matriz_2: number [][] =  [[1,2] , [0,2]];

let somaMatriz_1: number = calcularMatriz(matriz_1);

let somaMatriz_2: number = calcularMatriz(matriz_2);

console.log(`A soma da matriz_1 é ${somaMatriz_1}`);

console.log(`A soma da matriz_2 é ${somaMatriz_2}`)

if(somaMatriz_1 > somaMatriz_2){


    console.log("A soma da matriz_1 é maior que a soma da matriz_2")
}
else if(somaMatriz_2 > somaMatriz_1){

    console.log("A soma da matriz_2 é maior que a soma da matriz_1")

}
else {


    console.log("A soma das matrizes é igual")
}*/

//Exercicio 4

//Fazer um programa que deverá permitir que o usuário entre com os valores dos
//elementos de uma matriz quadrada de ordem 4 e o possibilite a realizar as seguintes funcionalidades
//a)Imprimir todos os elementos da matriz.
//b)Somar os quadrados de todos os elementos da primeira coluna.
//c)Somar todos os elementos de da terceira linha.
//d)Somar os elementos da diagonal principal.
//e)Somar todos os elementos de indice par da segunda linha.

function criarMatriz(): number[][] {
  const matriz: number[][] = [];
  for (let linha = 0; linha < 4; linha++) {
    matriz[linha] = [];
    for (let coluna = 0; coluna < 4; coluna++) {
      matriz[linha][coluna] = parseInt(prompt(`Insira o valor para Matriz[${linha + 1}][${coluna + 1}]`));
    }
  }
  return matriz;
}
function imprimirMatriz(matriz: number[][]): void {
  for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
      console.log(`Matriz[${linha + 1}][${coluna + 1}] = ${matriz[linha][coluna]}`);
    }
  }
}
function somarQuadradosPrimeiraColuna(matriz: number[][]): number {
  let soma = 0;
  for (let linha = 0; linha < matriz.length; linha++) {
    soma += Math.pow(matriz[linha][0], 2);
  }
  return soma;
}
function somarElementosTerceiraLinha(matriz: number[][]): number {
  let soma = 0;
  for (let coluna = 0; coluna < matriz[2].length; coluna++) {
    soma += matriz[2][coluna];
  }
  return soma;
}
function somarElementosDiagonalPrincipal(matriz: number[][]): number {
  let soma = 0;
  for (let linha = 0; linha < matriz.length; linha++) {
    soma += matriz[linha][linha];
  }
  return soma;
}
function somarElementosIndiceParSegundaLinha(matriz: number[][]): number {
  let soma = 0;
  for (let coluna = 0; coluna < matriz[1].length; coluna += 2) {
    soma += matriz[1][coluna];
  }
  return soma;
}

const matriz = criarMatriz();

console.log(`matriz:`);
imprimirMatriz(matriz);

console.log(
  `A soma dos quadrados da primeira coluna:`,
  somarQuadradosPrimeiraColuna(matriz)
);
console.log(
  `A soma dos elementos da terceira linha:`,
  somarElementosTerceiraLinha(matriz)
);
console.log(
  `A soma dos elementos da diagonal principal é:`,
  somarElementosDiagonalPrincipal(matriz)
);
console.log(
  `A soma dos elementos de indice par da segunda linha é:`,
  somarElementosIndiceParSegundaLinha(matriz)
);

