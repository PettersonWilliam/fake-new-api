const express = require('express'); // import express
const userRoutes = require('./routes/userRoutes');// import rota de user
const productRoutes = require('./routes/productRoutes');// import rota de product
const saleRoutes = require('./routes/saleRoutes');// import rota de sale
const cors = require('cors');

require('./database');

const app = express();// inicializando o express

app.use(cors());// inicializando o express com o cors
app.use(express.json());// inicializando o express retornando em json
app.use(userRoutes);//inicializando o express com a rotas de user
app.use(productRoutes);//inicializando o express com a rotas de product
app.use(saleRoutes);//inicializando o express com a rotas de sale

app.listen(3001);//ele inicia a aplicação na porta ... neste caso 3001
