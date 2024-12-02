const User = require("../model/Users")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Login do Usuário
exports.loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Senha inválida' });
      }
      const token = jwt.sign({ id: user._id }, "seu_segredo_jwt", { expiresIn: '1d' });
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };