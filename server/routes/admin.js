const express = require("express");
const router = express.Router();

// Require controller modules.
const {
  GetAllUsers,
  GetAllProducts,
  GetOneUser,
} = require("../contollers/admin.js");

router.get("/getalluser", GetAllUsers);
router.get("/getoneuser/:id_user", GetOneUser);
router.get("/getallproduct", GetAllProducts);

module.exports = router;
