const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

/**
 * return api for login form
 */
router.post('/signin', userController.postSignIn);

/**
 * return api for register form
 */
router.post('/signup', userController.postSignUp);

module.exports = router;