var User = require('../model/User')

module.exports = {
    respond: (req, res, next) => {
        let name = "world";
        if (req.params.name !== undefined) {
            name = req.params.name;
        }

        var user = new User({
            username: name,
            password: "test",
            email: 'test@test.fr'
        });
        user.save()

        res.send('hello ' + name);

        next();
    }
}