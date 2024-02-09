const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  'blog','root','', {
    host: "localhost",
    dialect: "MariaDB"
  }
)

module.exports= {
  Sequelize:Sequelize,
  sequelize:sequelize
}