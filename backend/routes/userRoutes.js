const express = require("express");
const { register, login, updateUserProducts } = require("../controllers/userController.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/products", updateUserProducts)

module.exports = router;
