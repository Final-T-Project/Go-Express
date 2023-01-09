const express = require("express");
const router = express.Router();

// Require controller modules.
const { AddUser, UpdateUser ,GetUserProfile } = require("../contollers/user.js");

router.post("/addUser", AddUser);
router.put("/updateUser/:id_user", UpdateUser);
router.get("/getUserPorfile/:id_user",GetUserProfile)

module.exports = router;
