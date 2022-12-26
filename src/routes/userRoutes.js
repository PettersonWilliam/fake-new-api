const { Router } = require('express');
const UserController = require('../controller/userController')();
const UserSchema = require('../schema/user');
const SchemaValidator = require('../middlewares/schemaValidator');
const loginRequired = require('../middlewares/loginRequired');
const routes = Router();


routes.post('/users', SchemaValidator(UserSchema.store), UserController.store);

routes.post('/users/login', SchemaValidator(UserSchema.login), UserController.login);

module.exports = routes;