const Router = require('express')
const router = new Router()

const ExcursionController = require('../controllers/excursion.controller.js')

//GET 
router.get('/excursions_default', ExcursionController.getAll)

//GET full
router.get('/excursions', ExcursionController.getAllFull)

//GET by ID
router.get('/excursions/:id', ExcursionController.getById)

router.post('/excursions/', ExcursionController.post)

router.put('/excursions/:id', ExcursionController.put)

router.delete('/excursions/:id', ExcursionController.delete)

module.exports = router

