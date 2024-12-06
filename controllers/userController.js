const User = require("../model/Users")
const bcrypt = require('bcryptjs');



// Registrar Usuário
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Verificar se o e-mail já existe no banco de dados
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ 
        error: true,
        message: 'Este e-mail já está em uso' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10); // Adicionado o número de salt rounds
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    
    res.status(201).json({ 
      message: 'Usuário registrado com sucesso', 
      error: false });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




// Obter Dados do Usuário
exports.getUser = async (req, res) => {
  const { id } = req.params;


  try {
    const user = await User.findById(id).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};


// Obter todos usuários
exports.getAllusers = async (req, res) => {
  try {
      const users = await User.find({}).select('-password');
    res.status(200).json(users);
  } catch (error) {
    
    res.status(500).json({ error: 'Erro ao obter todos os usuários' });
  }
};

//deletar usuário
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
  const user = await User.findByIdAndDelete(id)
  res.status(200).send('deu certo!')
  if(!user){
    res.status(404).json({erro: 'usuário no encontrado'})
  }

  } catch (error) {
    res.status(500).json({error: 'Erro ao deletar usuários'})
  }
}


//atualizar usuário
exports.updateUser = async (req, res) => {
  const {id} = req.params
  try {
    
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Adicionado o número de salt rounds
    const newUser = ({ name, email, password: hashedPassword })
    const user = await User.findByIdAndUpdate(id, newUser, {new: true});   
    
  if(!user){
    return res.status(404).json({erro: 'usuário não encontrado'})
  }
  res.status(200).json({ message: 'Usuário atualizado com sucesso', user }); 
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({erro: 'Erro ao atualizar usuário'})
  }
}