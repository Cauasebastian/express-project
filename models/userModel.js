const moongoose = require('mongoose');

const userSchema = new moongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: [true, 'Email already exists']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password']
    }
}, {
    timestamps: true
});

module.exports = moongoose.model('User', userSchema);