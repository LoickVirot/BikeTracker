var restify = require('restify');
var appConfig = require('./config/app.json');
var mongoose = require('mongoose');

// Initialize server
var server = restify.createServer({
    name: appConfig.appName
});

server.use(restify.plugins.bodyParser());

// Initialize Database
mongoose.connect('mongodb://localhost:27017/tracker', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log('Database connected');

    // Initialize routes
    var Router = require('./config/routes.js');
    Router.init(server);

    // Launch server
    server.listen(appConfig.port, function() {
        console.log('%s listening at %s', server.name, server.url);
    });

})