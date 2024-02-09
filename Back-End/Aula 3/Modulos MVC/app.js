const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");
const post = require("./models/post");
//Na importação deste modulo irá criar a tabela
//caso ela não exista se tiver postMessage.sync({force:true})
//ele irá deletar a tabela e criar outra vez
const postagem = require("./models/post");
const port = 2023;
//configurar passagem do método post pelo proprio express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//configurar o handlebars
//template engine
layoutsDir: __dirname + "/views/layouts";
//Abaixo foi dado permissão de acesso ao handlebars para
//visualizar dados do servidor de dados
//inclusive apresentar os dados no template engine do
//handlebars
app.engine(
  "handlebars",
  handlebars.engine({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
//criação da rota formulario que está sendo renderizada com 
//o arquivo formulario.handlebars
app.get("/formulario", function(req,res){
  res.render('layouts/formulario')
}) 
app.get("/editar", function(req,res){
  res.render('layouts/editar')
})

app.post("/atualizar", function(req,res){
  // id = req.body.id
  const idPost = req.body.id
  /*postagem é a variavel que alem de realizar a conexão com
 o banco de dados criou a entidade que ira atualizar dados na 
 tabela */

 postagem.update({
  titulo: req.body.titulo,
  conteudo: req.body.conteudo
 })
})
