var mongoose = require('mongoose');
var bcrypt = require('bcrypt')

var userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    }
})

// Validation

userSchema.path('email').validate((email) => {
    var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    return emailRegex.test(email);
});

userSchema.pre('save', async function () {
    const saltRounds = 10;

    this.password = await bcrypt.hash(this.password, saltRounds)
})
module.exports = mongoose.model('User', userSchema);