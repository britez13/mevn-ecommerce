const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    savedProducts: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model('User', userSchema, 'users')