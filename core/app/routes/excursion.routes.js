const Router = require('express')
const router = new Router()

const ExcursionController = require('../controllers/excursion.controller.js')

//GET 
router.get('/excursions', ExcursionController.getAll)

module.exports = router

