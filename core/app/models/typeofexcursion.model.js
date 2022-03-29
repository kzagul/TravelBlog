const Sequelize = require('sequelize')
const db = require('../app/db/Sequelize')

const TypeOfExcursion = db.define('typeofexcursion', {
    // id: {
    //     type: Sequelize.INTEGER
    // },
    type: {
        type: Sequelize.STRING
    }
});

TypeOfExcursion.sync().then(() => {
    console.log('table created');
});

module.exports = TypeOfExcursion