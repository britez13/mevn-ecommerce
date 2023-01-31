const express = require("express");
const { getProducts } = require("../controllers/productController.js");

const router = express.Router();

// console.log("getCategories", getCategories)

router.get("/", getProducts);
// router.get("/product/:productId", getProduct );

module.exports = router;