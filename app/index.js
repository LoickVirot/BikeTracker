var restify = require('restify');
var appConfig = require('./config/app.json');
var mongoose = require('mongoose');

// Initialize server
var server = restify.createServer({
    name: appConfig.appName
});

server.pre(restify.pre.sanitizePath());

server.use(restify.plugins.bodyParser());

// Initialize Database
mongoose.connect('mongodb://mongo:27017/tracker', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log('Database connected');

    // Initialize routes4

    var Router = require('./config/routes.js');
    Router.init(server);

    // Launch server
    server.listen(appConfig.port, function() {
        console.log('%s listening at %s', server.name, server.url);
    });

})