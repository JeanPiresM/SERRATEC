// Importa o módulo "express", que é um framework para construir aplicativos web em Node.js
const express = require("express");

// Importa o módulo "cors" para lidar com políticas de mesma origem (Cross-Origin Resource Sharing)
const cors = require('cors');

// Cria uma instância do servidor Express
const api = express();

// Adiciona middleware para processar dados no formato JSON
api.use(express.json());

// Importa as rotas definidas no arquivo "router.js"
const routes = require("./router");

// Adiciona o middleware CORS para permitir solicitações de origens diferentes
api.use(cors());

// Adiciona as rotas ao servidor Express
api.use(routes);

// Inicia o servidor na porta 4100
api.listen(4100);
