let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

let BadRequestResponse = require('../core/responses/BadRequestResponse');
let InternalErrorResponse = require('../core/responses/InternalErrorResponse');
let SuccessResponse = require('../core/responses/SuccessResponse');
let User = require('../model/User');
let config = require('../config/app.json');

module.exports = {

    login: async (req, res, next) => {
        // Check user's entires
        if (req.body.username === undefined) {
            res.send(new BadRequestResponse('Username not defined'));
            return next();
        }
        if (req.body.password === undefined) {
            res.send(new BadRequestResponse('Password not defined'));
            return next();
        }
        try  {
            // Check if user exists
            let user = await User.findOne({
                username: req.body.username,
            });
            if (user === null) {
                res.send(new BadRequestResponse('User not found'))
                return next();
            }
            // Verify password
            try {
                let bcryptRes = await bcrypt.compare(req.body.password, user.password)
                if (!bcryptRes) {
                    res.send(new BadRequestResponse('Incorrect password'));
                    return next();
                }
                let token = jwt.sign({
                    'username': user.username
                }, config.jwtSecret, { expiresIn: '1h' });
                res.send(new SuccessResponse(token));
                return next();
            } catch (err) {
                res.send(new InternalErrorResponse('Error while comparing passwords: ' + err))
                return next();
            }
        } catch (err) {
            res.send(new InternalErrorResponse('Error while retrieving user: ' + err))
            return next();
        }
    }
}