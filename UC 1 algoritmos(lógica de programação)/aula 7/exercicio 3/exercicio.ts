function somar(numeroUm : number; numeroDois: number): number {

let somar = numeroUm + numeroDois;

return somar;
}

const  numeroUm: number = prompt("Digite um número: ");

const numeroDois: number = prompt("Digite outro número: ");

if(numeroUm != null && numeroDois != null){

    let numero1 = parseFloat(numeroUm)
    
    let numero2 = parseFloat(numeroDois)

console.log(`A soma dos dois números é igual a ${somar(numero1,numero2)}`);


}

