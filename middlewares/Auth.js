const jwt = require('jsonwebtoken');

exports.autenticacao = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Não autorizado' });
  }

  const token = authorization.replace('Bearer ', '').trim();
  try {
    const data =  jwt.verify(token, 'seu_segredo_jwt'); 
    const { id } = data;    
    req.userId = id; 
    return next();
  } catch (error) {
    console.error('Erro ao verificar token JWT:', error);
    return res.status(401).json({ message: 'Não autorizado teste' });
    
  }
}
