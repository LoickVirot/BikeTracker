var DefaultController = require('../controller/DefaultController')
var UserController = require('../controller/UserController')
var AuthController = require('../controller/AuthController')
var TrackerController = require('../controller/TrackerController')

var AuthMiddleware = require('../middlewares/AuthMiddleware')

module.exports = {
    init: (server) => {
        // Hello world
        server.get('/hello', DefaultController.respond);
        server.get('/hello/:name', DefaultController.respond);
        
        // User CRUD
        server.post('/user', UserController.post);
        server.get('/user', AuthMiddleware, UserController.get);
        server.get('/user/:id', AuthMiddleware, UserController.get);
        server.del('/user/:id', AuthMiddleware, UserController.delete);
        server.put('/user/:id', AuthMiddleware, UserController.put);

        // Tracker CRUD
        server.post('/tracker', AuthMiddleware, TrackerController.post);
        server.get('/tracker', AuthMiddleware, TrackerController.list);
        server.get('/tracker/:id', AuthMiddleware, TrackerController.get);
        server.del('/tracker/:id', AuthMiddleware, TrackerController.delete);
        server.put('/tracker/:id', AuthMiddleware, TrackerController.put);

        // Auth
        server.post('/login', AuthController.login);
    }
}