//A variável sequeliza recebe todas as propriedades do modulo sequelize 
const sequelize = require("sequelize");
//A variavel ('objeto') database é instânciado pela palavra reservada new
//que irá passar todas as propriedades do modulo para o objeto database 
/**
 * Na passagem de parâmetro segue a ordem
 * 1.nome do banco, 2.usuário, 3.senha do banco,
 * e um objeto com local e tecnologia do banco de dados.
 */
const database = new sequelize("armazem", "root", "", {
  host: "localhost",
  dialect: "mariadb"
});
//sync é o método sincronizador que fará a conexão com o banco de dados
database.sync();
//Abaixo eu realizo a exportação desse modulo para ser utilizado em outra
//parte da aplicação
module.exports = database;
