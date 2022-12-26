const express = require('express'); // import express
const userRoutes = require('./routes/userRoutes');// import rota de user
const cors = require('cors');

require('./database');

const app = express();// inicializando o express

app.use(cors());// inicializando o express com o cors
app.use(express.json());// inicializando o express retornando em json
app.use(userRoutes);//inicializando o express com a rotas de user

app.listen(3001);//ela executa e escuta na porta indicada 
