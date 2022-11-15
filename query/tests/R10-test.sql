Update ShoppingCart 
SET quantity = 0
WHERE user_id = 300 AND product_id = 102;

DELETE FROM ShoppingCart WHERE quantity = 0;

Select * from ShoppingCart;