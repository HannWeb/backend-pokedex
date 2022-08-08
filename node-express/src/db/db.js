const Sequelize = require("sequelize");

const User = require("./models/user");

const sequelize = new Sequelize('pokedex', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
  });

const user = User(sequelize, Sequelize);

sequelize.sync({force: false})
.then(()=>{
    console.log("tablas")
})

module.exports = {
    user
}