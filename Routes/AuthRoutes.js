const express = require('express');
const { HandleUserSignUp, HandleUserLogin } = require('../Controllers/AuthControllers');
const { HandleValidation } = require('../Middleware/AuthMiddlewares');
const router = express.Router();


router.post('/signUp',HandleValidation, HandleUserSignUp);

router.post('/login', HandleUserLogin);

module.exports = router;
// This code defines the authentication routes for user sign-up and login in an Express application.