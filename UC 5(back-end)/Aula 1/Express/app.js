const express = require("express");
const port = 2023;
const app = express();
const handlebars = require("express-handlebars");
const nome = "Jean";
const sobrenome = "Pires";
const profissao = "aluno";
const idade = 20;
const materias = ["css", "html", "typescript"];

app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/dados", function (req, res) {
  res.render("dados", {nome, sobrenome, idade, profissao, materias});
});
app.listen(port, function () {
  console.log(`O servidor esta rodando no http://localhost:${port}`);
});

app.get("/blog", function (req, res) {
  res.send("Minha pagina blog");
});

app.get("/sobre", function (req, res) {
  res.send("Minha pagina sobre");
});
