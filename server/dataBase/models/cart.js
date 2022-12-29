// import the database connection
const connection = require("../index.js");

module.exports = {
  // function to add cart
  add: function (callback, payment_type, date, user_id_user, state) {
    const sql = `INSERT INTO cart (payment_type,date,user_id_user,state) VALUES("${payment_type}","${date}","${user_id_user}", "${state}")`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
