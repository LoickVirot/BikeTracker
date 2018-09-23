let TestHook = require('../model/TestHook');
let BadRequestResponse = require('../core/responses/BadRequestResponse');
let SuccessResponse = require('../core/responses/SuccessResponse');

module.exports = {

    /**
     * TEMPORARY
     * Save request body in database to have some example data from Sigfox 
     */
    post: async (req, res, next) => {
        if (req.body === null) {
            return next(new BadRequestResponse('No content sent.'))
        }
        try {
            try {
                let json = JSON.stringify(req.body);
                let tracker = new TestHook({'content': json});
                await tracker.save();
                res.send(new SuccessResponse(tracker))
                return next();
            } catch (err) {
                let error = new BadRequestResponse('Error parsing json: ' + err);
                console.error(error);
                return next(error);
            }
        } catch (err) {
            return next(new BadRequestResponse('Error while saving content: ' + err));
        }
    },

}