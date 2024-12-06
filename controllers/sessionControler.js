const User = require("../model/Users")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


// Login do Usuário
exports.loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({ 
          error: true,
          message: 'Usuário não encontrado'

        });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.json({ 
          error: true,
          message: 'Senha inválida' });
      }
      const token = jwt.sign({ id: user._id }, `${process.env.CHAVE_JWT}`, { expiresIn: '25s' });
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };