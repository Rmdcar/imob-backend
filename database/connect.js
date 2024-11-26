const mongoose = require('mongoose');
require('dotenv').config();

const connectToDataBase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@teste.nqrjb.mongodb.net/Database?retryWrites=true&w=majority`
    );
    console.log("Conexão ao banco de dados realizada com sucesso");
  } catch (error) {
    console.error("Ocorreu erro ao conectar", error);
  }
};

module.exports = connectToDataBase;
