const product = require("../dataBase/models/product.js");

module.exports = {
  // function to add Product
  AddProduct: function (req, res) {
    product.add(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body.sellIerd,
      req.body.buyerId,
      req.body.product_name,
      req.body.category,
      req.body.price,
      req.body.description,
      req.body.photo,
      req.body.quantity,
      req.body.id_user,
      req.body.id_cart,
      req.body.productStatus,
      req.body.Published_at
    );
  },
  // function to get Product by categories

  GetProductBycategoy: function (req, res) {
    product.getProducts(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.params.category);
  },
};
