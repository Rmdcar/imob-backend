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

exports.buscatodosImoveis = async (req, res) => {
    try{
    const imoveis = await Imob.find({});
    res.status(200).json(imoveis)

} catch (error) {
    res.status(500).json({error: error.message})
}
}

exports.getImovel = async (req, res) => {
    const { id } = req.params;
    try {
        const imob = await Imob.findById(id)
        if(!imob){
            return res.status(404).json({error: 'Imóvel não encontrado'})
        }
        res.status(200).json(imob)
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar imóvel'})
    }
}


exports.deleteImob = async (req, res) => {
    const { id } = req.params;
  
    try {
    const imob = await Imob.findByIdAndDelete(id)
    res.status(200).send('Imóvel excluido!')
    if(!imob){
      res.status(404).json({erro: 'imóvel não encontrado'})
    }
  
    } catch (error) {
      res.status(500).json({error: 'Erro ao deletar i´movel'})
    }
  }

  exports.updateImovel = async (req, res) => {
    const {id} = req.params
    try {
      
      const { tipo, cidade, estado, descricao, valor } = req.body;
     const newImovel = ({ tipo, cidade, estado, descricao, valor })
      const imovel = await Imob.findByIdAndUpdate(id, newImovel, {new: true});   
      
    if(!imovel){
      return res.status(404).json({erro: 'imovel não encontrado'})
    }
    res.status(200).json({ message: 'Imovel atualizado com sucesso', imovel }); 
    } catch (error) {
      console.error('Erro ao atualizar imovel:', error);
      res.status(500).json({erro: 'Erro ao atualizar imovel'})
    }
  }