
const Product = require("../models/productModel");

const getProducts = async(req, res ) => {
    const products = await Product.find();
    res.json(products);
}

const getProduct = (req, res) => {
    res.send("Your product")
}

module.exports = {
    getProducts,
    getProduct
}