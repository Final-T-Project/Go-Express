// import the database connection
const connection = require("../index.js");

module.exports = {
  // function to add product
  add: function (
    callback,
    sellIerd,
    name,
    category,
    price,
    photo,
    quantity,
    id_user,
    id_cart
  ) {
    const sql = `INSERT INTO product (sellIerd,name,category,price,photo,quantity,user_id_user,cart_id_cart) VALUES("${sellIerd}", "${name}","${category}","${price}","${photo}","${quantity}","${id_user}","${id_cart}" )`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
