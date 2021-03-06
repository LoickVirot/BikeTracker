var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const Schema = mongoose.Schema

var userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false 
    },
    email: {
        type: String,
        required: true,
    }
}, {
    versionKey: false
})

// Validation

userSchema.path('email').validate((email) => {
    var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    return emailRegex.test(email);
});

userSchema.pre('save', async function (next) {
    const saltRounds = 10;

    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, saltRounds);
});

module.exports = mongoose.model('User', userSchema);