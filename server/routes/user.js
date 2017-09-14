var express = require('express')
var router = express.Router();
var userController = require('../controller/userController')

// routing for user
router.post('/signin', userController.signin)
router.post('/signup', userController.signup)
// router.get('/all', userController.getAllUser)

module.exports = router
