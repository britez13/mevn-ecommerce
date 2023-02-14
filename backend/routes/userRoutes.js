const express = require("express");
const { register, login, getUserProducts, updateUserProducts } = require("../controllers/userController.js");
const { protect } = require("../middlewares/authMiddleware.js");


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/products/:id", getUserProducts)
router.put("/products", protect, updateUserProducts)

module.exports = router;
