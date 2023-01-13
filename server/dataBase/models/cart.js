// import the database connection
const connection = require("../index.js");

module.exports = {
  // function to add cart
  add: function (callback, payment_type, date, id_user, state) {
    const sql = `INSERT INTO cart (payment_type,date,user_id_user,state) VALUES("${payment_type}","${date}","${id_user}", "${state}")`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
  addProductToCart: function (callback, id_product, id_cart) {
    const sql = `INSERT INTO products_cart (product_id_product,cart_id_cart) VALUES(${id_product},${id_cart})`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  getIdCart: function (callback, id_user) {
    const sql = ` SELECT * FROM cart WHERE user_id_user = "${id_user}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  getCartProduct: function (callback, id_cart) {
    const sql = `SELECT * FROM products_cart INNER JOIN product ON products_cart.product_id_product=product.id_product WHERE products_cart.cart_id_cart = "${id_cart}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  deleteProductFromCart: function (callback, id_product) {
    const sql = `DELETE FROM products_cart WHERE product_id_product= "${id_product}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
