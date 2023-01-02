const express = require("express");
const router = express.Router();

// Require controller modules.
const { GetAllUsers, GetAllProducts } = require("../contollers/admin.js");

router.get("/getalluser", GetAllUsers);
router.get("/getallproduct", GetAllProducts);

module.exports = router;
