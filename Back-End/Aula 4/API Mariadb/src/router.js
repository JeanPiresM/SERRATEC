//A variavel express recebe por atribuição propriedades do módulo express
const express = require('express');

//A variavelcontrollerProduto recebe por atribuição os métodos que foram
//implementados no módulo ProdutoController
const controllerProduto = require('./controllers/ProdutoController');

//routes variavel que recebe por atribuição os métodos Router
// da framework express
const routes = express.Router();

routes.get('/List', controllerProduto.List);
routes.post('/Create', controllerProduto.Create);
routes.post('/Update', controllerProduto.Update);

// routes.get('/GetOne', controllerProduto.GetOne);

routes.post('/GetOne', controllerProduto.GetOne); // MUDAMOS PARA POST
routes.delete('/Delete', controllerProduto.Delete);
module.exports = routes;