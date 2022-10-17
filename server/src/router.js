const express = require('express');
const ProductController = require("./controllers/ProductController");
const CommentController = require("./controllers/CommentController");

const router = express.Router();

router.get("/products", ProductController.getAllProduct);
router.get("/product/:product_id", ProductController.getProductById);

router.get("/product/:product_id/comments", CommentController.getByProductId);

router.get("/user/:user_id/comments", CommentController.getByUserId);

module.exports = router;