var DefaultController = require('../controller/DefaultController')
var UserController = require('../controller/UserController')
var AuthController = require('../controller/AuthController')

var AuthMiddleware = require('../middlewares/AuthMiddleware')

module.exports = {
    init: (server) => {
        // Hello world
        server.get('/hello', DefaultController.respond);
        server.get('/hello/:name', DefaultController.respond);
        
        // User CRUD
        server.post('/user', AuthMiddleware, UserController.post);
        server.get('/user', AuthMiddleware, UserController.get);
        server.get('/user/:id', AuthMiddleware, UserController.get);
        server.del('/user/:id', AuthMiddleware, UserController.delete);
        server.put('/user/:id', AuthMiddleware, UserController.put);

        // Auth
        server.post('/login', AuthController.login);
    }
}