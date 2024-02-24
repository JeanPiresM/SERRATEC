var entradaDigitoInstrutor = prompt("Digite um dos conceios A, PA ou NA: ");
if (entradaDigitoInstrutor !== null) {
    var coceitos = entradaDigitoInstrutor;
    switch (true) {
        case coceitos === "A" || coceitos === "a":
            console.log("Atendido");
            alert("Atendido");
            break;
        case coceitos === "PA" || coceitos === "pa":
            ("Parcialmente Atendido");
            console.log("Parcialmente Atendido");
            break;
        case coceitos === "NA" || coceitos === "na":
            console.log("Não Atendido");
            break;
    }
}
