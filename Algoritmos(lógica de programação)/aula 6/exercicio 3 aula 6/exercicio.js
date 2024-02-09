var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var contagemRegressiva = prompt("Digite um número");
while (contagemRegressiva >= 0) {
    document.write(contagemRegressiva(__makeTemplateObject(["<pr>"], ["<pr>"])));
    console.log(contagemRegressiva);
    contagemRegressiva--;
}
