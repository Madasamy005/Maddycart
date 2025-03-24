const express = require("express");
const { getProducts, getSingleProduct } = require("../controller/product_controller");
const router = express.Router();

// Correct API endpoints
router.route("/products").get(getProducts);
router.route("/products/:id").get(getSingleProduct);

module.exports = router;