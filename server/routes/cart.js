const express = require("express");
const router = express.Router();

// Require controller modules.
const { AddCart } = require("../contollers/cart.js");

router.post("/addCart", AddCart);

module.exports = router;
