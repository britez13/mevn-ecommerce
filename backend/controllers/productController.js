
const Product = require("../models/productModel");

const getCategories = async(req, res ) => {
    const products = await Product.find();
    res.json(products);
}

const getProduct = (req, res) => {
    res.send("Your product")
}

module.exports = {
    getCategories,
    getProduct
}