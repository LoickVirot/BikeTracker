var mongoose = require('mongoose');

var trackerSchema = mongoose.Schema({
    trackerId: {
        type: String,
        unique: true,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

// Validation

trackerSchema.path('trackerId').validate((trackerId) => {
    return trackerId.length <= 8;
});

module.exports = mongoose.model('Tracker', trackerSchema);