const notaAluno: string | null = prompt("Digite a nota do aluno: ");

if(notaAluno !== null){

const nota = parseFloat(notaAluno);

if(nota < 0 || nota > 10){
console.log(`Nota Inválida!`)
}
else if(nota >= 0 && nota < 4){
    
    console.log(`Aluno reprovado!`)
}
    else if (nota >= 4 && nota < 7)
{
console.log(`Aluno em recuperação!`)

}else if (nota >= 7 && nota<= 10){

    console.log(`Aprovado!`)

}

}

