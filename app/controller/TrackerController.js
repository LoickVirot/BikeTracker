let Tracker = require('../model/Tracker');
let InternalErrorResponse = require('../core/responses/InternalErrorResponse');
let BadRequestResponse = require('../core/responses/BadRequestResponse');
let SuccessResponse = require('../core/responses/SuccessResponse');

module.exports = {

    list: async (req, res, next) => {
        try {
            let trackers = await Tracker.find({});
            res.send(new SuccessResponse(trackers));
            return next();
        } catch (err) {
            return next(new InternalErrorResponse('Error while getting trackers'));
        }
    },

    get: async (req, res, next) => {
        trackerId = req.params.id;
        try {
            let tracker = await Tracker.findOne({_id: trackerId});
            res.send(new SuccessResponse(tracker));
            return next();
        } catch (err) {
            return next(new InternalErrorResponse('Error while getting trackers'));
        }
    },

    post: async (req, res, next) => {
        if (req.body.trackerId === undefined) {
            return next(new BadRequestResponse('TrackerId not defined'))
        }
        try {
            let tracker = new Tracker(req.body);
            await tracker.save();
            res.send(new SuccessResponse(tracker))
            return next();
        } catch (err) {
            return next(new BadRequestResponse('Error while saving tracker: ' + err));
        }
    },

    put: async (req, res, next) => {
        let id = req.params.id;
        let body = req.body;
        try {
            let tracker = await Tracker.findOne({_id: id});
            if (body.label !== tracker.label) {
                tracker.label = body.label; 
            }
            if (body.owner !== tracker.owner) {
                tracker.owner = body.owner;
            }
            await tracker.save();
            res.send(new SuccessResponse(tracker));
            return next();
        } catch (err) {
            return next(new BadRequestResponse('Error while saving tracker: ' + err));
        }
    },

    delete: async (req, res, next) => {
        let id = req.params.id;
        try {
            let tracker = await Tracker.findOneAndRemove({ _id: req.params.id })
            if (tracker === null) {
                res.send(new BadRequestResponse("Tracker not found"));
                return next();
            }
            res.send(new SuccessResponse("OK"));
            return next();
        } catch (err) {
            res.send(new InternalErrorResponse("Cannot delete tracker: " + err));
        }
    }

}