// import the database connection
const connection = require("../index.js");

module.exports = {
  // function to add user
  add: function (callback, id_user, name, email, phone_number) {
    const sql = `INSERT INTO cart (id_user,name,email,phone_number ) VALUES("${id_user}","${name}","${email}", "${phone_number}")`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
