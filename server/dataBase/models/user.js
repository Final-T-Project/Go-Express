// import the database connection
const connection = require("../index.js");

module.exports = {
  // function to add user
  add: function (callback, id_user, name, email, phone_number) {
    const sql = `INSERT INTO user (id_user,name,email,phone_number ) VALUES("${id_user}","${name}","${email}", "${phone_number}")`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
  // function to update user
  update: function (callback, name, gender, adress, photo, ville, id_user) {
    const sql = `UPDATE user SET name="${name}",gender="${gender}",adress="${adress}",photo="${photo}",ville="${ville}" WHERE id_user="${id_user}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
