const express = require('express')
const router = express.Router()

const db = require('../db/Sequelize.js')
const {TypeOfExcursion} = require('../models/typeofexcursion.model')
// const typeofexcursion = require('../models/typeofexcursion.model.js')

router.get('/', (req, res) => 
    TypeOfExcursion.findAll()
        .then(TypeOfExcursions => {
            console.log(TypeOfExcursions)
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
)
// JSON.stringify(TypeOfExcursion.findAll())
module.exports = router;

