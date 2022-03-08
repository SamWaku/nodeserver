const express = require('express');

const router = express.Router();

const UserController = require('../../controllers/userControllers');

const { auth } = require('../../middleware/auth');

router.post('/register', UserController.newUser);

router.get('/profile/:_id', auth, UserController.getUser);

router.get('/list', auth, UserController.getUsers);

router.put('/update/:_id', auth, UserController.updateUser);

router.delete('/delete/:_id', auth, UserController.deleteUser);

router.post('/login', UserController.loginUser);

router.post('/refresh', UserController.refreshTokenUser);

router.get('/logout', UserController.logoutUser);

module.exports = router;