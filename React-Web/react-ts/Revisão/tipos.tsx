//String 
//Number
//Boolean

//Tipagem por inferencia
let nome = "Jean Pires"
// nome = 3
console.log(typeof nome)

//Tipagem explicita
let idade: number = 20

//Tipagem de Funçoes
function somar(num1: number, num2:number) {
    return num1 + num2;
}


const pessoa: Pessoa = {
    nome: "Jean Pires",
    idade: 20
}
type Pessoa = {
    nome: string,
    idade: number
}
