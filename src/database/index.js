const Sequelize = require('sequelize'); // importando o sequelize 

const dbConfig = require('../config/database'); // importando a config do database 

const database = new Sequelize(dbConfig); // instanciando nosso sequelize passando a config do database como parametro 
const User = require('../models/User');

User.init(database);

// por ultimo exportamos nossa config caso queira ultilizar em outro canto
module.exports = database;