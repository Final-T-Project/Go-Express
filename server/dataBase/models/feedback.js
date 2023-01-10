const connection = require("../index.js");
module.exports = {
  //function to add feedback
  add: function (callback, details, user_id_user) {
    const sql = `INSERT INTO feedback (details,user_id_user)VALUES("${details}","${user_id_user}")`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
