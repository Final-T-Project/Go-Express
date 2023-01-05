const users = require("../dataBase/models/user.js");

module.exports = {
  // function to add user
  AddUser: function (req, res) {
    users.add(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body.id_user,
      req.body.name,
      req.body.email
    );
  },
  // function to update user
  UpdateUser: function (req, res) {
    users.update(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body.name,
      req.body.gender,
      req.body.adress,
      req.body.photo,
      req.body.ville,
      req.params.id_user
    );
  },
};
