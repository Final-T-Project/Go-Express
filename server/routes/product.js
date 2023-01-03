const express = require("express");
const router = express.Router();

// Require controller modules.
const { AddProduct, GetProductBycategoy } = require("../contollers/product.js");

router.post("/addProduct", AddProduct);
// router.put("/updateProduct/:id_product", UpdateProduct);
router.get("/:category", GetProductBycategoy); // get all post by categorie

module.exports = router;
