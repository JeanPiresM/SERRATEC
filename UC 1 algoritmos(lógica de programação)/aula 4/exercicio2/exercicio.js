var valorColesterol = prompt("Digite seu colesterol");
if (valorColesterol !== null) {
    var colesterol = parseFloat(valorColesterol);
    if (colesterol < 180) {
        console.log("Sa\u00FAde esta OK");
    }
    else
        console.log("Procure ajuda m\u00E9dica!");
}
