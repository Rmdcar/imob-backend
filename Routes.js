const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const imobController = require('./controllers/imobController')
const sessionController = require('./controllers/sessionControler');
const auth  = require('./middlewares/Auth');


// Rotas de Usuários
router.get('/usuarios/todos', auth.autenticacao, userController.getAllusers)
router.get('/usuario/:id', userController.getUser);
router.post('/register', userController.registerUser);
router.delete('/delete/:id', userController.deleteUser)
router.patch('/update/:id', userController.updateUser)


//Rotas de imóveis
router.post('/registerImoveis', imobController.registerImovel);
router.get('/imoveis/todos', imobController.buscatodosImoveis);
router.get('/imovel/:id', imobController.getImovel);
router.delete('/deleteimovel/:id', imobController.deleteImob)
router.patch('/updateimovel/:id', imobController.updateImovel)



//Rotas de login
router.post('/login', sessionController.loginUser);


module.exports = router;
