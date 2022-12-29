const express = require("express");
const router = express.Router();

// Require controller modules.
const { GetAllUsers } = require("../contollers/admin.js");

router.get("/getalluser", GetAllUsers);

module.exports = router;
