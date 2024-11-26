const dotenv = require("dotenv"); //importante para subir servidor na cloud
dotenv.config()
const connectToDataBase = require('./database/connect')
const express = require('express')
const userRoutes = require('./userRoutes')
const bodyParser = require('body-parser')

const app = express()
const port = 3030
app.use(bodyParser.json());


connectToDataBase()

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`); 
});