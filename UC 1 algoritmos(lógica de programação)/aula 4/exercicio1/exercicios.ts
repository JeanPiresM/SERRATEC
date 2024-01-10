
const entradaSalario: string | null = prompt("Digite o seu salário")

if(entradaSalario !== null){

const salario = parseFloat(entradaSalario)

if(salario > 3000){


   console.log(`Oferecer plano Alfa`) 

}else{
   console.log(`Oferecer o plano beta`)
}

}