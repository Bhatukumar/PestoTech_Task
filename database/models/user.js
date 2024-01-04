const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type:String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: String,
    lastName: String,
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String,
      },
    role: { type: String, enum: ['customer', 'admin'], default: 'customer' },

});

const User = mongoose.model("User", userSchema);

module.exports = User;