const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

// Rotas de Usuários
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/:id', userController.getUser);

module.exports = router;
