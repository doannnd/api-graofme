const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    phone: {type: Number, required: true, unique: true},
    password: {type: String, required: true},
});

const User = mongoose.model('User', userSchema);

module.exports = User;