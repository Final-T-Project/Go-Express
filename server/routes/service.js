const express = require("express");
const router = express.Router();

const { addBookedService } = require("../contollers/service.js");

router.post("/addBookedService", addBookedService);

module.exports = router;