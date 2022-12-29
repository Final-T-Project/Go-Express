const express = require("express");
const router = express.Router();

// Require controller modules.
const { AddProduct, UpdateProduct } = require("../contollers/product.js");

router.post("/addProduct", AddProduct);
// router.put("/updateProduct/:id_product", UpdateProduct);

module.exports = router;
