const express = require('express');
const Product = require("./database/Product");

const router = express.Router();

router.get("/products", async (req, res) => {
  // should call controler if we need more modularization
  Product.getAll((err, results) => {
    if (err) {
      res.status(500);
      return res.send("Database connection error");
    }
    res.status(200);
    return res.send(results);
  });
});

module.exports = router;