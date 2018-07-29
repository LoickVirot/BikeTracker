let jwt = require('jsonwebtoken');
let config = require('../config/app.json')
let UnauthorizedResponse = require('../core/responses/UnauthorizedResponse');

module.exports = async (req, res, next) => {
    // Get token
    let token = req.headers.authorization;

    // verify
    try {
        let check = await jwt.verify(token, config.jwtSecret)
        if (check !== null) {
            req.token = check; // Define user
        }
        return next();
    } catch (err) {
        return next(new UnauthorizedResponse());
    }
}