const entradaNotaAluno: string | null = prompt("Digite a nota do aluno: ");

if (entradaNotaAluno !== null) {

    const notaAluno = parseFloat(entradaNotaAluno);

    if (notaAluno < 0 || notaAluno > 10) {
        console.log(`Nota Inválida!`);
    }
    else if (notaAluno >= 0 && notaAluno < 4) {

        console.log(`Aluno reprovado!`);
    }
    else if (notaAluno >= 4 && notaAluno < 7) {
        console.log(`Aluno em recuperação!`);

       const entradaNotaAluno: string | null = prompt(" Digite a nota da Recuperação");
       
        if (entradaNotaAluno !== null) {
            const notaAluno = parseFloat(entradaNotaAluno);
            switch (true) {

                case (notaAluno < 5):

            console.log(`Reprovou na recuperação`);

            break;

                case (notaAluno > 5):

            console.log(`Aprovado na recuperação`);
             
            break;
        }
    }
} else if (notaAluno >= 7 && notaAluno <= 10) {

    console.log(`Aprovado!`);

}

}


  
}