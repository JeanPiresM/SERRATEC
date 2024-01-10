var valorVenda = prompt("Digite o quanto você vendeu este mês");
if (valorVenda !== null) {
    var venda = parseFloat(valorVenda);
    if (venda >= 100000) {
        var bateuMeta = venda * 0.04;
        console.log("Voc\u00EA recebra uma comiss\u00E3o de ".concat(bateuMeta, " "));
    }
    else {
        var naoBateu = venda * 0.02;
        console.log("Voc\u00EA receber\u00E1 apenas ".concat(naoBateu));
    }
}
