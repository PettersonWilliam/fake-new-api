const { Router } = require('express');
const UserController = require('../controller/userController')();
const UserSchema = require('../schema/user');
const SchemaValidator = require('../middlewares/schemaValidator');
const loginRequired = require('../middlewares/loginRequired');
const routes = Router();


routes.get('/users', loginRequired, UserController.index);

routes.get('/users/:id', loginRequired, SchemaValidator(UserSchema.show), UserController.show);

routes.post('/users', SchemaValidator(UserSchema.store), UserController.store);

routes.post('/users/login', SchemaValidator(UserSchema.login), UserController.login);

routes.put('/users/:id',loginRequired, SchemaValidator(UserSchema.update), UserController.update);

routes.delete('/users/:id',loginRequired, SchemaValidator(UserSchema.delete), UserController.deleteUser);

module.exports = routes;