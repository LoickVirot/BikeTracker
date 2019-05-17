const Position = require('../model/Position');
const BadRequestResponse = require('../core/responses/BadRequestResponse');
const SuccessResponse = require('../core/responses/SuccessResponse');
const InternalErrorResponse = require('../core/responses/InternalErrorResponse');
const Tracker = require('../model/Tracker');

module.exports = {
    post: async (req, res, next) => {
        const position = new Position(req.body);
        try {
            const savedPosition = await position.save();
            const tracker = await Tracker.findOne(savedPosition.tracker);
            tracker.positions.push(savedPosition);
            tracker.save();
        } catch (err) {
            return next(new BadRequestResponse("Cannot insert position into database: " + err));
        }
        return next(new SuccessResponse('OK'));
    },

    get: async (req, res, next) => {
        try {
            const trackerPositions = await Position.find({tracker: req.params.id}).populate('tracker');
            return next(new SuccessResponse(trackerPositions));
        } catch (err) {
            return next(new BadRequestResponse(err.message));
        }
    },
}