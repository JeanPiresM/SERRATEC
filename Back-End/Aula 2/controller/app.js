const server = require('express')

const app = server()

const port = 2005

/**
 * Criei as variaveis usuarioController e tarefaController 
 * e importei os modulos com suas classes e metodos
 */
const usuarioController = require("./src/controller/usuarioController")
const tarefaController = require("./src/controller/tarefaController")


/**
 * Estou utilizando as variaveis acessando os métodos direto
 * da classe sem ter que instancia-las
 */
usuarioController.rotas(app)
usuarioController.rotasHome(app)
tarefaController.rotas(app)


app.get('/',function(req,res){
  res.end('pagina home')
})

app.listen(port, function(req,res){
  console.log(`Servidor rodando na porta localhost:${port}`)
})