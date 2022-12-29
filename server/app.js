const express = require("express");
const app = express();

const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const usersRoute = require("./routes/user.js");
const adminRoute = require("./routes/admin.js");
const productRoute = require("./routes/product.js");
const cartRoute = require("./routes/cart.js");

app.use("/users", usersRoute);
app.use("/admin", adminRoute);
app.use("/products", productRoute);
app.use("/carts", cartRoute);
module.exports = app;
