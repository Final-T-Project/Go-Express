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
      req.body.user_id_user,
      req.body.state
    );
  },
};
