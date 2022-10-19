
const Product = require("../database/Product");
const _ = require("lodash");
function getAllProduct(req, res) {
  const options = {};
  if (req.query.price && req.query.price.toLowerCase() === "asec") {
    options.sort = { price: true };
  } else if (req.query.rating && _.isNumber(_.toNumber(req.query.rating))) {
    options.filter = {
      rating: _.toNumber(req.query.rating)
    };
  }
  Product.getAll(options, (err, results) => {
    if (err) {
      res.status(500);
      return res.send("Database Error");
    }
    res.status(200);
    return res.send(results);
  });
};
function getProductById(req, res) {
  Product.getById(req.params["product_id"], (err, results) => {
    if (err) {
      res.status(500);
      return res.send("Database Error");
    }
    res.status(200);
    return res.send(results);
  });
};
function deleteProductById(req, res) {
  Product.deleteById(req.params["product_id"], (err, results) => {
    if (err) {
      res.status(500);
      return res.send("Database Error");
    }
    res.status(200);
    return res.send(results);
  });
};

module.exports = {
  getAllProduct, getProductById, deleteProductById
};