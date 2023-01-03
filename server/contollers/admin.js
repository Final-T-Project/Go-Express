const admin = require("../dataBase/models/admin.js");

module.exports = {
  // function to get all user
  GetAllUsers: function (req, res) {
    admin.getAllUser(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },

  // function to get one user
  GetOneUser: function (req, res) {
    admin.getOneUser(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.params.id_user);
  },

  GetAllProducts: function (req, res) {
    admin.getAllProduct(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
};
