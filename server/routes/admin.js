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
  GetAllFeedBack,
  GetEmployers
} = require("../contollers/admin.js");

// user route
router.get("/getalluser", GetAllUsers);
router.get("/getoneuser/:id_user", GetOneUser);

// product route
router.get("/getallproductnotaccepted", GetAllProductsNotAccepted);
router.get("/getoneproduct/:id_product", GetOneProduct);
router.put("/updateproductstate/:id_product", UpdateProductState);
router.put("/updateproductprice/:id_product", UpdateProductPrice);
router.delete("/deleteproduct/:id_product", DeleteProduct);

// feedback route
router.get("/getallfeedback", GetAllFeedBack);

// employer  route
router.get ("/getEmployers",GetEmployers)
module.exports = router;
