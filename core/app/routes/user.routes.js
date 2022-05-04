const Router = require('express')
const router = new Router()

const UserController = require('../controllers/user.controller.js')

//GET
router.get('/users', UserController.getAll)

module.exports = router

