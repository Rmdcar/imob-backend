const dotenv = require("dotenv"); //importante para subir servidor na cloud
dotenv.config()
const connectToDataBase = require('./database/connect')
const express = require('express')
const userRoutes = require('./userRoutes')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json());


connectToDataBase()

app.use('/api/users', userRoutes);

app.listen(process.env.port, () => {
  console.log(`Servidor rodando`); 
});