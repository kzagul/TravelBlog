const Router = require('express')
const router = new Router()

const TypeOfExcursionController = require('../controllers/typeofexcursion.controller.js')

//GET 
router.get('/typeexcursion', TypeOfExcursionController.getAll)

module.exports = router

