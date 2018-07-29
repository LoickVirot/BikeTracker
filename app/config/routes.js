var DefaultController = require('../controller/DefaultController')
var UserController = require('../controller/UserController')
var AuthController = require('../controller/AuthController')

module.exports = {
    init: (server) => {
        // Hello world
        server.get('/hello', DefaultController.respond);
        server.get('/hello/:name', DefaultController.respond);
        
        // User CRUD
        server.post('/user', UserController.post);
        server.get('/user', UserController.get);
        server.get('/user/:id', UserController.get);
        server.del('/user/:id', UserController.delete);
        server.put('/user/:id', UserController.put);

        // Auth
        server.post('/login', AuthController.login);
    }
}