const express = require("express");
const router = express.Router();

// Require controller modules.
const {
  GetAllUsers,
  GetOneUser,
  GetAllProductsNotAccepted,
  GetOneProduct,
  UpdateProductState,
  DeleteProduct,
  UpdateProductPrice,
} = require("../contollers/admin.js");

router.get("/getalluser", GetAllUsers);
router.get("/getoneuser/:id_user", GetOneUser);
router.get("/getallproductnotaccepted", GetAllProductsNotAccepted);
router.get("/getoneproduct/:id_product", GetOneProduct);
router.put("/updateproductstate/:id_product", UpdateProductState);
router.put("/updateproductprice/:id_product", UpdateProductPrice);
router.delete("/deleteproduct/:id_product", DeleteProduct);

module.exports = router;
