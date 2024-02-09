/**ATIVIDADE 1
 *1. Faça um pequeno programa onde o usuario digite um valor
 * e o programa retorna o valor digitado com aumento de 100%
 */
//*Declaração de variavel que recebera valor para realização de calculo
//const entradaValor = prompt("Digite um valor: ")
//*verifica se a variavel entradaValor não é nula
//if( entradaValor !== null){
//*crie a variavel valor recebendo o valor da variavel entradaValor 
//*e utilizei a função parseFloat para definir esse valor como
//*ponto flutuante (fracional).
//const valor = parseFloat(entradaValor)
/*/Criei a variavel aumento que recebe o valor da variável valor
*calculando um aumento de 100%
*/
//let aumento = valor * 1;
/*Criei a variavel valorFinal que recebe por atibuição
*o calculo do valor original informado o aumento de 100%
*/
//let valorFinal = valor + aumento;
//*Abaixo segue a saida dos dados com seus
//*respectivos calculos.
//console.log(`o valor informado foi de ${valor}` );
//console.log(`o valor do aumento foi de ${aumento}`);
//console.log(`o valor final foi de ${valorFinal}`);
//}
//fim do script
//inicio atividade 2
/*let valorProduto:number = 0;

valorProduto = prompt(`Digite o valor do produto: `);

let aumentoProduto = valorProduto * 1.5;

console.log(`o seu produto vale ${valorProduto}R$ `);

console.log(`o valor do seu produto mais 50% sera ${aumentoProduto}R$`);

document.write(`o seu produto vale ${valorProduto}R$ <br>`);

document.write(`o valor do seu produto mais 50% sera ${aumentoProduto}R$`);

alert(`o seu produto vale ${valorProduto}R$`);

alert(`o valor do seu produto mais 50% sera ${aumentoProduto}R$`);
*/
//fim atividade 2 
//INICIO ATIVIDADE 3
/*let entradaValorInvestimento: number = 0;

entradaValorInvestimento = parseFloat(prompt("Digite o valor do seu investimento: "))
 
let rendaInvestimento = entradaValorInvestimento * 0.3

console.log(`O ivestimento vai render ${rendaInvestimento} reais`)
*/
//FIM ATIVIDADE 3
//INICIO ATIVIDADE 4
/*let salario: number;

let salario = parseFloat(prompt("Digite o seu salario"));

let aumentoSalario = salario * 0.15

let salarioFinal = salario + aumentoSalario;

console.log(`O seu salario aumentado em 15% será ${salarioFinal} reais `);
*/
//FIM ATIVIDADE 4
//INICIO ATIVIDADE 5
/*let entradaValorProduto:number;

entradaValorProduto = parseFloat(prompt("Digite o valor do produto: "));

let porcentagemProduto = entradaValorProduto * 0.07;

let desconto = entradaValorProduto - porcentagemProduto;


console.log(`O valor do produto é ${entradaValorProduto} reais`);

console.log(`O valor descontado será ${porcentagemProduto} reais`);

console.log(`O valor do produto após o desconto será ${desconto} reais`);
*/
//FIM ATIVIDADE 5
//INICIO ATIVIDADE 6
var entradaSalario;
entradaSalario = parseFloat(prompt("Declare o salario: "));
var descontoValeTransporte = entradaSalario * 0.06;
var descontoInss = entradaSalario * 0.08;
var sobraSalario = entradaSalario - descontoValeTransporte - descontoInss;
console.log("O salario declarado \u00E9 ".concat(entradaSalario, " reais"));
console.log("O desconto do vale transporte ser\u00E1 ".concat(descontoValeTransporte, " reais"));
console.log("O desconto do INSS ser\u00E1 ".concat(descontoInss, " reais"));
console.log("A sobra do seu salario ser\u00E1 ".concat(sobraSalario, " reais"));
