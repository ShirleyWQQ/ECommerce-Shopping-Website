
const Comment = require("../database/Comment");
function getByProductId(req, res) {
  // should call controler if we need more modularization
  Comment.getByProductId(req.params["product_id"], (err, results) => {
    if (err) {
      res.status(500);
      return res.send("Database Error");
    }
    res.status(200);
    return res.send(results);
  });
};
function getByUserId(req, res) {
  Comment.getByUserId(req.params["user_id"], (err, results) => {
    if (err) {
      res.status(500);
      return res.send("Database Error");
    }
    res.status(200);
    return res.send(results);
  });
};

module.exports = {
  getByProductId, getByUserId
};