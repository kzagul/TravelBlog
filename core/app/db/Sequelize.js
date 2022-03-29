//DataBase ORM 
const { Sequelize } = require('sequelize');

const db = new Sequelize('travelblog', 'kirillzagul', 'vbrjkf', {
    host: 'localhost',
    dialect: 'postgres',
    // operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db

db.authenticate()
    .then(() => console.log("DataBase connected..."))
    .catch(err => console.log("Error: " + err))