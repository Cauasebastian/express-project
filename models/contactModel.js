const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required'],
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: true,
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
        trim: true,
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model('Contact', contactSchema);