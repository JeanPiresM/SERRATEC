const entradaNumeroMes: string | null = prompt("Digite um numero de 1 a 12: ");

if(entradaNumeroMes !== null){

const numero = parseFloat(entradaNumeroMes);

switch(true){

case numero === 1:

console.log("Mês 1 é Janeiro")

break;

case numero === 2:

console.log("Mês 2 é Fevereiro")

break;

case numero === 3:
    console.log("Mêss 3 é Março")

break;

case numero === 4:
    console.log("Mês 4 é Abril")
    
    break;

    case numero === 5:
    console.log("Mês 5 é Maio")

    break;

    case numero === 6:
    
console.log("Mês 6 é Junho")

    
    break;

    case numero === 7:
    
console.log("Mês 7 é Julho")
   
    break;

    case numero === 8:
    
console.log("Mês numero 8 é Agosto")
   
    break;

    case numero === 9:
   
console.log("Mês numero 9 é setembro")
    
    break;

    case numero === 10:
    
console.log("Mês numero 10 é Outubro")
  
    break;

    case numero === 11:
   
console.log("Mês numero 11 é Novembro")
    break;


    case numero === 12:
    
    console.log("Mês numero 12 é Dezembro")
    
    break;



}




}