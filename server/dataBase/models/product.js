// import the database connection
const connection = require("../index.js");

module.exports = {
  // function to add product
  add: function (
    callback,
    sellIerd,
    buyerId,
    product_name,
    category,
    price,
    description,
    photo,
    quantity,
    id_user,
    id_cart,
    productStatus,
    Published_at
  ) {
    const sql = `INSERT INTO product (sellIerd, buyerId,product_name,category,price, description,photo_product,quantity,user_id_user,cart_id_cart,productStatus,Published_at) VALUES("${sellIerd}", "${buyerId}", "${product_name}","${category}","${price}", "${description}" ,"${photo}","${quantity}","${id_user}","${id_cart}","${productStatus}","${Published_at}"     )`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
  // function to get products by categories
  getProducts: function (callback, category) {
    const sql = `SELECT * FROM product WHERE category="${category}"and productStatus ="Accepted"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
