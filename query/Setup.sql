-- Create the database
DROP DATABASE project;
CREATE DATABASE project;
USE project;
-- Create each table
CREATE TABLE User (
  user_id INT NOT NULL PRIMARY KEY,
  profile TEXT NOT NULL,
  user_name VARCHAR(20) NOT NULL,
  password TEXT NOT NULL
);
CREATE TABLE Admin (
  admin_id INT NOT NULL REFERENCES User(user_id),
  PRIMARY KEY(admin_id)
);
CREATE TABLE Category (
  category_id INT NOT NULL PRIMARY KEY,
  category_name VARCHAR(30) NOT NULL
);
CREATE TABLE Product (
  product_id INT NOT NULL PRIMARY KEY,
  description TEXT NOT NULL,
  price DECIMAL(6, 2) NOT NULL,
  product_rating DECIMAL(2, 1) NOT NULL,
  picture_source TEXT NOT NULL,
  product_name TEXT NOT NULL
);
CREATE TABLE CategoryProduct (
  product_id INT NOT NULL,
  category_id INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES Product(product_id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES Category(category_id) ON DELETE CASCADE,
  PRIMARY KEY (product_id, category_id)
);
CREATE TABLE Comment (
  comment_id INT NOT NULL PRIMARY KEY,
  rating INT NOT NULL,
  updated_time TIMESTAMP NOT NULL,
  content TEXT NOT NULL,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES Product(product_id) ON DELETE CASCADE,
  -- each user can only comment the product once
  UNIQUE KEY(user_id, product_id),
  CHECK (
    rating >= 0
    AND rating <= 5
  )
);

-- Import sample data into the tables, please read through the comment below for instructions

-- Run the query below, check the output
SHOW VARIABLES LIKE "secure_file_priv";
/* If you have NULL, use Method 1. Else, use Method 2
   both assumes you are working in MySQL Workbench) */
/* Method 1:
   Add the following to Connection setting > Advanced */
--OPT_LOCAL_INFILE=1
/* Close current connection, open a new one
   Execute the following query */
--SET GLOBAL local_infile = "ON";
--SHOW VARIABLES LIKE "local_infile";
/* You should see `local_infile` as `ON`
   Find the aboslute path to the correponding sample files, replace the path in the LOAD DATA query
   Modify the query to `LOAD DATA LOCAL INFILE`  */

/* Method 2
   Locate the folder indicated by secure_file_priv
   Copy the datafile into it
   Copy the sample data file into the folder
   Update the path of LOAD DATA queries to the folder path
   Replace "/"" instead of "\"" in the path */

-- Load User/Admin
LOAD DATA INFILE "REPLACE_YOUR_PATH/User.txt" INTO TABLE User;
LOAD DATA INFILE "REPLACE_YOUR_PATH/Admin.txt" INTO TABLE Admin;
-- Load Category
LOAD DATA INFILE "REPLACE_YOUR_PATH/Category.txt" INTO TABLE Category;
-- Load Product
LOAD DATA INFILE "REPLACE_YOUR_PATH/Shirley_Fruit.txt" INTO TABLE Product;
LOAD DATA INFILE "REPLACE_YOUR_PATH/Sara_BabyProduct.txt" INTO TABLE Product;
LOAD DATA INFILE "REPLACE_YOUR_PATH/Colby_Vegetable.txt" INTO TABLE Product;
LOAD DATA INFILE "REPLACE_YOUR_PATH/Daniel_Drink.txt" INTO TABLE Product;
LOAD DATA INFILE "REPLACE_YOUR_PATH/Peter_Skincare.txt" INTO TABLE Product;
-- Load CategoryProduct
LOAD DATA INFILE "REPLACE_YOUR_PATH/CategoryProduct.txt" INTO TABLE CategoryProduct;
-- Load Comment
LOAD DATA LOCAL INFILE "REPLACE_YOUR_PATH/Comment.txt" INTO TABLE Comment;

SELECT * FROM User;
SELECT * FROM Admin;
SELECT * FROM Product;