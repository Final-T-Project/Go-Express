const cart = require("../dataBase/models/cart.js");

module.exports = {
  // function to add user
  AddCart: function (req, res) {
    cart.add(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body.payment_type,
      req.body.date,
      req.body.id_user,
      req.body.state
    );
  },

  AddProductToCart: function (req, res) {
    cart.addProductToCart(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body.id_product,
      req.body.id_cart
    );
  },
  GetIdCart: function (req, res) {
    cart.getIdCart(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.params.id_user);
  },
  GetCartProduct: function (req, res) {
    cart.getCartProduct(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.params.id_cart);
  },
  DeleteProductFromCart: function (req, res) {
    cart.deleteProductFromCart(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.params.id_product);
  },
};
