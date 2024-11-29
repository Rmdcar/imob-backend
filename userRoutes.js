const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const imobController = require('./controllers/imobController')

// Rotas de Usuários
router.get('/get/all', userController.getAllusers)
router.get('/:id', userController.getUser);
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.delete('/delete/:id', userController.deleteUser)
router.patch('/update/:id', userController.updateUser)


//Rotas de imóveis
router.post('/registerImoveis', imobController.registerImovel);


module.exports = router;
