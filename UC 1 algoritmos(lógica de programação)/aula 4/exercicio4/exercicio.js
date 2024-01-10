var notaAluno = prompt("Digite a nota do aluno: ");
if (notaAluno !== null) {
    var nota = parseFloat(notaAluno);
    if (nota > 10 || nota < 0) {
        console.log("Nota Inv\u00E1lida!");
    }
    else if (nota >= 0 && nota < 4) {
        console.log("Aluno reprovado!");
    }
    else if (nota >= 4 && nota < 7) {
        console.log("Aluno em recupera\u00E7\u00E3o!");
    }
    else if (nota >= 7 && nota <= 10) {
        console.log("Aprovado!");
    }
}
