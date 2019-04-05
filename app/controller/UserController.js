var User = require('../model/User');
var BadRequestResponse = require('../core/responses/BadRequestResponse');
var SuccessResponse = require('../core/responses/SuccessResponse');
var InternalErrorResponse = require('../core/responses/InternalErrorResponse');

module.exports = {
    post: async (req, res, next) => {
        var user = new User(req.body);
        try {
            await user.save()
        } catch (err) {
            res.send(new BadRequestResponse("Cannot insert user into database: " + err));
            return next();
        }
        res.send(new SuccessResponse('OK'));
        return next();
    },

    get: async (req, res, next) => {
        if (req.params.id === undefined) {
            try {
                let users = await User.find();
                users.map(user => user.password = null);
                res.send(new SuccessResponse(users));
            } catch (err) {
                res.send(new InternalErrorResponse(err));
            }
            return next();
        }
        try {
            let user = await User.findOne({_id: req.params.id});
            if (user == null) {
                res.send(new BadRequestResponse('User not found'))
                return next();
            }
            user.password = null;
            res.send(new SuccessResponse(user));
        } catch (err) {
            res.send(new InternalErrorResponse(err));
        }
        return next();
    },

    delete: async (req, res, next) => {
        try {
            let user = await User.findOneAndRemove({_id: req.params.id})
            if (user === null) {
                res.send(new BadRequestResponse("User not found"));
                return next();
            }
            res.send(new SuccessResponse("OK"));
        } catch (err) {
            res.send(new InternalErrorResponse("Cannot delete user: " + err));
        }
        return next();
    },

    put: async (req, res, next) => {
        try {
            let user = await User.findOne({_id: req.params.id});
            if (user === null) {
                res.send(new BadRequestResponse("User not found"));
                return next();
            }
            if (req.body.password !== undefined) {
                user.password = req.body.password;
            }
            if (req.body.username !== undefined) {
                user.username = req.body.username;
            }
            if (req.body.email !== undefined) {
                user.email = req.body.email;
            }
            await user.save();
            res.send(new SuccessResponse("OK"));
        } catch (err) {
            res.send(new InternalErrorResponse("Cannot update user: " + err))
        }
        return next();
    }
}