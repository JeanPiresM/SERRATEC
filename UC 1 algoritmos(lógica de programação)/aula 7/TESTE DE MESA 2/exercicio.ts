//EXERCICIO 1

/*function add(x){

    x++;

    return x;
}

let a = 0;

let b = 5;

for(let i = 0; i <= 3; i++){

b = a - i;

a = add(b);

console.log(a)


}*/


//EXERCICIO 2

function adicionarNumero(numeroLocal){

numeroLocal++

return numeroLocal
}

function removerNumero(numeroLocal){

numeroLocal--;

return numeroLocal
}

let numeroA = 10

let numeroB = 2

while(numeroA > 5){

numeroA = numeroA - 4

if(numeroB > 0){


    numeroB = removerNumero(numeroB)
}
numeroA = adicionarNumero(numeroA)


console.log(numeroA)
}