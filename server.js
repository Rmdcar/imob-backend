const dotenv = require("dotenv"); //importante para subir servidor na cloud
dotenv.config()
const connectToDataBase = require('./database/connect')
const express = require('express')
const userRoutes = require('./userRoutes')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json());

connectToDataBase()

//middleware
app.use((req, res, next) =>{
  console.log(`Tipo de requisição: ${req.method}`)
  console.log(`Tipo de requisição: ${req.headers["content-type"]}`)
  console.log(`Tipo de requisição: ${new Date()}`)
  console.log(req.body)
  next()
})

app.use('/', userRoutes);

app.listen(process.env.port, () => {
  console.log(`Servidor rodando na porta localhost:3000`); 
});