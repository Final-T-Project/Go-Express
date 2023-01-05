// import the database connection
const connection = require("../index.js");

module.exports = {
  // function to add product
  add: function (
    callback,
    sellIerd,
    buyerId,
    name,
    category,
    price,
    description,
    photo,
    quantity,
    id_user,
    id_cart
  ) {
    const sql = `INSERT INTO product (sellIerd, buyerId,name,category,price, description,photo,quantity,user_id_user,cart_id_cart) VALUES("${sellIerd}", "${buyerId}", "${name}","${category}","${price}", "${description}" ,"${photo}","${quantity}","${id_user}","${id_cart}" )`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  getProducts: function (callback, category) {
    const sql = `SELECT * FROM product WHERE category="${category}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
