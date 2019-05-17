var mongoose = require('mongoose');

var positionSchema = mongoose.Schema({
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    tracker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tracker',
        required: true,
        select: false
    },
    time: {
        type: Date,
        required: true,
    }
})

module.exports = mongoose.model('Position', positionSchema);