const express = require('express');
const ProductController = require("./controllers/ProductController");
const CommentController = require("./controllers/CommentController");
const CategoryController = require("./controllers/CategoryController");
const UserController = require("./controllers/UserController");

const router = express.Router();

router.get("/products", ProductController.getAllProduct);
router.get("/product/:product_id", ProductController.getProductById);
router.delete("/product/:product_id", ProductController.deleteProductById);

router.get("/product/:product_id/comments", CommentController.getByProductId);

router.get("/user/:user_id/comments", CommentController.getByUserId);
router.delete("/comment/:comment_id", CommentController.deleteById);

router.post("/user/login", UserController.login);
router.post("/user/register", UserController.register);

router.get("/categories", CategoryController.getAllCategory);

module.exports = router;