var entradaNotaAluno = prompt("Digite a nota do aluno: ");
if (entradaNotaAluno !== null) {
    var notaAluno = parseFloat(entradaNotaAluno);
    if (notaAluno < 0 || notaAluno > 10) {
        console.log("Nota Inv\u00E1lida!");
    }
    else if (notaAluno >= 0 && notaAluno < 4) {
        console.log("Aluno reprovado!");
    }
    else if (notaAluno >= 4 && notaAluno < 7) {
        console.log("Aluno em recupera\u00E7\u00E3o!");
        var entradaNotaAluno_1 = prompt(" Digite a nota da Recuperação");
        if (entradaNotaAluno_1 !== null) {
            var notaAluno_1 = parseFloat(entradaNotaAluno_1);
            switch (true) {
                case (notaAluno_1 < 5):
                    console.log("Reprovou na recupera\u00E7\u00E3o");
                    break;
                case (notaAluno_1 > 5):
                    console.log("Aprovado na recupera\u00E7\u00E3o");
                    break;
            }
        }
    }
    else if (notaAluno >= 7 && notaAluno <= 10) {
        console.log("Aprovado!");
    }
}
