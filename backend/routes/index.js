var express = require('express');
var router = express.Router();

mainController = require('../controllers/main')

/* GET home page. */
router.get('/', mainController.home)
router.get('/about', mainController.about)
router.get('/contact', mainController.contact)
router.get('/forgot-password', mainController.forgotpassword)
router.get('/login', mainController.login)
router.get('/register', mainController.register)

module.exports = router;
