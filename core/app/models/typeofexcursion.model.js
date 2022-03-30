const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = require('../db/Sequelize')

class TypeOfExcursion extends Model {}

TypeOfExcursion.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    typeexcursion: DataTypes.STRING,
}, {
    sequelize, 
    modelName: 'typeofexcursion'
})

// const TypeOfExcursion = db.define('typeofexcursion', {
//     // id: {
//     //     type: Sequelize.INTEGER
//     // },
//     type: {
//         type: Sequelize.STRING
//     }
// });

// TypeOfExcursion.sync().then(() => {
//     console.log('table created');
// });

module.exports = {
    TypeOfExcursion,
}