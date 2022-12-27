const { Router } = require('express');
const SaleController = require('../controller/saleController');
const SaleSchema = require('../schema/sale');
const SchemaValidator = require('../middlewares/schemaValidator');
const loginRequired = require('../middlewares/loginRequired');
const routes = Router();


routes.get('/sales', SaleController.index);

routes.get('/sales/:id',loginRequired, SchemaValidator(SaleSchema.show), SaleController.show);

routes.post('/sales',loginRequired, SchemaValidator(SaleSchema.store), SaleController.store);

routes.put('/sales/:id',loginRequired, SchemaValidator(SaleSchema.update), SaleController.update);

routes.delete('/sales/:id',loginRequired, SchemaValidator(SaleSchema.delete), SaleController.remove);

module.exports = routes;