const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
const route = require("./routes");
app.use(express.json());
app.use(cors());
app.use("/api/", route);
module.exports = app;