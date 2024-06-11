// String - Number - Boolean

// Tipagem por inferência

let nome = "JEAN PIRES";
console.log(typeof nome);

// Tipagem explícita

let idade: number = 20;

// Tipagem de funções

function somar(num1: number, num2: number) {
return num1 + num2;
}

const pessoa: Pessoa = {
    name : "Jean",
    idade: 20
}

type Pessoa = {
name: string,
idade: number
}
