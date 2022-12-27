const Sequelize = require('sequelize'); // importando o sequelize 
const dbConfig = require('../config/database'); // importando a config do database 

// import dos models
const User = require('../models/User');
const Product = require('../models/Product');
const Sale = require('../models/Sale');

const connection = new Sequelize(dbConfig); // instanciando nosso sequelize passando a config do database como parametro 

// inicializando nossos models
User.init(connection);
Product.init(connection);
Sale.init(connection);

//chama a funç~ao associate passando o model
Product.associate(connection.models);
Sale.associate(connection.models);
User.associate(connection.models);

// por ultimo exportamos nossa config caso queira ultilizar em outro canto
module.exports = connection;