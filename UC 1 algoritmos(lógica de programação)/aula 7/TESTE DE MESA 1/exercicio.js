//EXERCICIO 1
function add(x) {
    x++;
    return x;
}
var a = 0;
var b = 5;
for (var i = 0; i <= 3; i++) {
    b = a - i;
    a = add(b);
    console.log(a);
}
