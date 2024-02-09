//EXERCICIO 1
function add (x: number):number{
    x++;

    return x;
}

let a:number = 0;

let b:number = 5;

for(let i = 0; i <= 3; i++){

b = a - i;

a = add(b);

console.log(a)

}