const restify = require('restify');
const appConfig = require('./config/app.json');
const mongoose = require('mongoose');
const corsMiddleware = require('restify-cors-middleware');

// Initialize server
const server = restify.createServer({
    name: appConfig.appName
});


const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: [appConfig.frontEndUrl],
  allowHeaders: ['API-Token', 'Authorization'],
  exposeHeaders: ['API-Token-Expiry']
})

server.pre(cors.preflight)
server.use(cors.actual)

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