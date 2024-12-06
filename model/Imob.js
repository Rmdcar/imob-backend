const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imobSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true    
  },
  estado: {
    type: String,
    required: true  
  },
  descricao: {    
    type: String,
    required: true  
  },
  valor: {
    type: Number,
    required: true,
    min: 0
  },
  data:{
    type: Date,
    default: Date.now
  },
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }
});


const ImobModel = mongoose.model("Imob", imobSchema);

module.exports = ImobModel;
