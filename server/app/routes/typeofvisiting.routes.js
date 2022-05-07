const Router = require('express')
const router = new Router()

const TypeOfVisitingController = require('../controllers/typeofvisiting.controller.js')

//GET
router.get('/typevisiting', TypeOfVisitingController.getAll)

module.exports = router

