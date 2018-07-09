var DefaultController = require('../controller/DefaultController')

module.exports = {
    init: function (server) {
        server.get('/hello', DefaultController.respond);
        server.get('/hello/:name', DefaultController.respond);
        server.head('/hello/:name', DefaultController.respond);
    }
}