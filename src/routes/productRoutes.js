const { Router } = require('express');
const ProductController = require('../controller/productController');
const ProductSchema = require('../schema/product');
const SchemaValidator = require('../middlewares/schemaValidator');
const loginRequired = require('../middlewares/loginRequired');
const routes = Router();


routes.get('/products', loginRequired, ProductController.index);

routes.get('/products/:id', loginRequired, SchemaValidator(ProductSchema.show), ProductController.show);

routes.post('/products', loginRequired, SchemaValidator(ProductSchema.store), ProductController.store);

routes.put('/products/:id',loginRequired, SchemaValidator(ProductSchema.update), ProductController.update);

routes.delete('/products/:id',loginRequired, SchemaValidator(ProductSchema.delete), ProductController.remove);

module.exports = routes;