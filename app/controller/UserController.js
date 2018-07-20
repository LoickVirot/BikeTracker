var User = require('../model/User');
var BadRequestResponse = require('../core/responses/BadRequestResponse');

module.exports = {
    post: async (req, res, next) => {
        var user = new User(req.body);
        console.log(user);

        try {
            await user.save()
        } catch (err) {
            res.send(400, new BadRequestResponse("Cannot insert user into database: " + err));
            return next();
        }
        res.send('OK');
        return next();
    }
}