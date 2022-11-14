
const Product = require("../database/Product");
const _ = require("lodash");
// Get list of product, supports sorting usring query string, case sensitive
//   eg. ?sortfield=rating&sortorder=asc
const supported = {
  sortFields: ["rating", "price"],
  sortOrder: ["asc", "desc"]
};
function getAllProduct(req, res) {
  const options = {};
  // Sort option
  const sortField = supported.sortFields.find(v => v === req.query.sortfield?.toLowerCase());
  let sortOrder = supported.sortOrder.find(v => v === req.query.sortorder?.toLowerCase());
  if (!sortOrder) sortOrder = "asc";
  if (sortField) {
    options.sort = { [sortField]: sortOrder === "asc" };
  }
  // Rating filer
  let rating = req.query.rating
  if (rating && !_.isNaN(_.toNumber(rating))) {
    rating = _.toNumber(rating);
    options.filter = { rating };
  }
  // Call database
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