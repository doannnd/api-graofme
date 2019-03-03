const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

/**
 * return api for login form
 */
router.post('/signin', userController.user_sign_in);

/**
 * return api for register form
 */
router.post('/signup', userController.user_sign_up);

/**
 * return api for find all user 
 */
router.get('/', userController.user_get_all);

/**
 * return api for get a user by id
 */
router.get('/:id', userController.user_get_one);

/**
 * return api when update user
 */
router.patch('/:id', userController.user_update);

/**
 * return api when delete user
 */
router.delete('/:id', userController.user_delete);

module.exports = router;