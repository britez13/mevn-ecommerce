const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    photo: {
        type: String
    }
})

module.exports = mongoose.model('Product', productSchema, 'products')
