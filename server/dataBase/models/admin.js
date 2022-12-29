// import the database connection
const connection = require("../index.js");

module.exports = {
  // function to get all user
  getAll: function (callback) {
    const sql = `SELECT * FROM user`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
