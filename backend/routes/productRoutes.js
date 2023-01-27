const express = require("express");
const { getCategories, getProduct } = require("../controllers/productController.js");

const router = express.Router();

// console.log("getCategories", getCategories)

router.get("/category/:categoryName", getCategories);
router.get("/product/:productId", getProduct );

module.exports = router;