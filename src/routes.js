const express = require('express')
const authMiddleware = require('./app/middleware/auth')

const controllers = require('./app/controllers')

const routes = express.Router()

routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

routes.use(authMiddleware)

// below this line all routes will apply the middleware

routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', controllers.AdController.store)
routes.put('/ads/:id', controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)

// Purchase

routes.post('/purchase', controllers.PurchaseController.store)

module.exports = routes
