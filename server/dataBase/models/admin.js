// import the database connection
const connection = require("../index.js");

module.exports = {
  // function to get all user
  getAllUser: function (callback) {
    const sql = `SELECT * FROM user`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  getAllProduct: function (callback) {
    const sql = `SELECT * FROM product`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
