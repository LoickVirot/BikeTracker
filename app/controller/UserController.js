var User = require('../model/User');
var BadRequestResponse = require('../core/responses/BadRequestResponse');
var SuccessResponse = require('../core/responses/SuccessResponse');

module.exports = {
    post: async (req, res, next) => {
        var user = new User(req.body);
        try {
            await user.save()
        } catch (err) {
            res.send(new BadRequestResponse("Cannot insert user into database: " + err));
            return next();
        }
        res.send(new SuccessResponse());
        return next();
    },

    get: async(req, res, next) => {
        if (req.params.id === undefined) {
            res.send(new SuccessResponse(await User.find()))
            return next();
        }
        res.send(new SuccessResponse(await User.find({_id: req.params.id})))
    }
}