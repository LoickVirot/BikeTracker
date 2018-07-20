var User = require('../model/User');
var BadRequestResponse = require('../core/responses/BadRequestResponse');

module.exports = {
    respond: async (req, res, next) => {
        let name = "world";
        if (req.params.name !== undefined) {
            name = req.params.name;
        }
        
        res.send('hello ' + name);
        return next();
    }
}