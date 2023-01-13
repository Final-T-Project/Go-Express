const express = require("express");
const router = express.Router();

// Require controller modules.
const {
  AddCart,
  AddProductToCart,
  GetIdCart,
  GetCartProduct,
  DeleteProductFromCart,
} = require("../contollers/cart.js");

router.get("/getIdCart/:id_user", GetIdCart);
router.get("/getCartProduct/:id_cart", GetCartProduct);

router.post("/addCart", AddCart);
router.post("/addProductTocart", AddProductToCart);

router.delete("/deleteProduct/:id_product", DeleteProductFromCart);

module.exports = router;
