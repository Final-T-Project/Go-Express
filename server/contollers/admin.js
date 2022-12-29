const admin = require("../dataBase/models/admin.js");

module.exports = {
  // function to get all user
  GetAllUsers: function (req, res) {
    admin.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
};
