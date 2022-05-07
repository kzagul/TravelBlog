const Router = require('express')
const router = new Router()

const ExcursionController = require('../controllers/excursion.controller.js')

//GET 
router.get('/excursions', ExcursionController.getAll)

//GET by ID
router.get('/excursions/:id', ExcursionController.getById)

module.exports = router

