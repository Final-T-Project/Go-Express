const express = require("express");
const router = express.Router();

// Require controller modules.
const { AddUser, UpdateUser } = require("../contollers/user.js");

router.post("/addUser", AddUser);
router.put("/updateUser/:id_user", UpdateUser);

module.exports = router;
