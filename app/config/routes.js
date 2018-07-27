var DefaultController = require('../controller/DefaultController')
var UserController = require('../controller/UserController')

module.exports = {
    init: function (server) {
        server.get('/hello', DefaultController.respond);
        server.get('/hello/:name', DefaultController.respond);
        
        server.post('/user', UserController.post);
        server.get('/user', UserController.get);
        server.get('/user/:id', UserController.get);
    }
}