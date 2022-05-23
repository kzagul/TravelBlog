const Router = require('express')
const router = new Router()

const TypeOfExcursionController = require('../controllers/typeofexcursion.controller.js')

//GET 
router.get('/typeexcursion', TypeOfExcursionController.getAll)

router.get('/typeexcursion/:id', TypeOfExcursionController.getById)

//POST
router.post('/typeexcursion', TypeOfExcursionController.post)
//PUT
router.put('/typeexcursion/:id', TypeOfExcursionController.put)
//DELETE
router.delete('/typeexcursion/:id', TypeOfExcursionController.delete)

module.exports = router

