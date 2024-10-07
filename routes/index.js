const express = require('express');
const router = express.Router();

// Js file decleration
var login = require('../controllers/login')

// routing for the url
router.post("/login",login.login);
router.post("/create_login",login.create_login)

module.exports = router;