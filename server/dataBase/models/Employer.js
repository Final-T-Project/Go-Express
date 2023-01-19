// import the database connection
const connection = require("../index.js");

module.exports = {
  // function to add Employer
  add: function (callback, first_name,last_name,adress, gender,photo,phone_number,work_position) {
    const sql = `INSERT INTO employer (first_name,last_name,adress,gender,photo,phone_number,work_position) VALUES("${first_name}","${last_name}","${adress}","${gender}","${photo}","${phone_number}","${work_position}")`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
}
