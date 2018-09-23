var mongoose = require('mongoose');

var TestHookSchema = mongoose.Schema({
    content: {
        type: "string",
        required: true
    },
})

module.exports = mongoose.model('TestHook', TestHookSchema);