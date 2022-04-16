const Router = require('express')
const router = new Router()

const UserLoginController = require('../controllers/userlogin.controller.js')

//GET all
router.get('/userlogins', UserLoginController.getAll)
//GET all admins
router.get('/useradmins', UserLoginController.getAdmins)

module.exports = router

