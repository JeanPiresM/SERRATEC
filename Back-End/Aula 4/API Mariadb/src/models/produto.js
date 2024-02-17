/**
 * variavel sequelize por atribuição recebe os metódos da orm sequelize
 */
const sequelize = require("sequelize");
/**
 A variável database importa a conexão com o banco de dados do arquivo db.ts
 */
const database = require("../db");
//Variavel shema para receber objetos para construção do banco de dados 
const shema = "";

/*Criação da classe produto para ser implementada a tabela produto no banco de dados do armazem
*/

class Produto extends sequelize.Model {}
// sequelize.Model { } => passa seus métodos para a classe produto 
// por meio de herança

//produto init sintaxe da orm para criação da minha entidade
Produto.init(
  {
    Codigo://atributo da tabela 
    {
      type: sequelize.INTEGER,//tipo de dado que será o código numerico
      autoIncrement: true,//auto increment a cada registro gera automático
      allowNull: false,//obrigatoriedade para ser registrado no banco de dados
      primaryKey: true,//definido como chave primária
    },
    Descricao: {
      type: sequelize.STRING,//tipo de dado varchar
      allowNull: true,
    },
    DataCriacao: {
      type: sequelize.DATE,//tipo de dado data
      allowNull: false,
    },
    DataAtualizacao: {
      type: sequelize.DATE,
      allowNull: true,
    },
  },
  {
    //variavel sequelize recebe conexão com o banco de dados por meio
    //da variável database 
    //modelName nome da tabela
    sequelize: database, modelName: "tbProduto", shema
  }
);

module.exports = Produto;
