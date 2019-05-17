var mongoose = require('mongoose');

var trackerSchema = mongoose.Schema({
    trackerId: {
        type: String,
        unique: true,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    label: {
        type: String,
        required: true
    },
    charge: {
        type: Number, 
        required: true
    },
    positions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Position',
            sort: 1
        }
    ]
}, {
    versionKey: false,
});

// Validation

trackerSchema.path('trackerId').validate((trackerId) => {
    return trackerId.length <= 8;
});

module.exports = mongoose.model('Tracker', trackerSchema)