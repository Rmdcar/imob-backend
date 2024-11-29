const Imob = require('../model/Imob')


exports.registerImovel = async (req, res) => {
    try{
    const {tipo, cidade, estado, descricao, valor} = req.body;
    const newImovel = new Imob ({tipo, cidade, estado, descricao, valor})
    await newImovel.save()
    res.status(201).json({message: 'Imóvel cadastrado com sucesso'})
} catch (error) {
    res.status(500).json({error: error.message})
}
}