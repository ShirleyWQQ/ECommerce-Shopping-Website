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
-- Import sample data into the tables
SHOW VARIABLES LIKE "secure_file_priv";
-- Above query will return you the "import" folder of MySQL
--   Copy the sample data file into this folder
--   Update the folder path (REPLACE_YOUR_PATH) below and run the query to import the dataset into tables
--   USE '/' instead of '\' in the path

-- Product
LOAD DATA INFILE "REPLACE_YOUR_PATH/Shirley_Fruit.txt" INTO TABLE Product;
LOAD DATA INFILE "REPLACE_YOUR_PATH/Sara_BabyProduct.txt" INTO TABLE Product;
LOAD DATA INFILE "REPLACE_YOUR_PATH/Colby_Vegetable.txt" INTO TABLE Product;
LOAD DATA INFILE "REPLACE_YOUR_PATH/Daniel_Drink.txt" INTO TABLE Product;
LOAD DATA INFILE "REPLACE_YOUR_PATH/Peter_Skincare.txt" INTO TABLE Product;

-- User/Admin
LOAD DATA INFILE "REPLACE_YOUR_PATH/User.txt" INTO TABLE User;
LOAD DATA INFILE "REPLACE_YOUR_PATH/Admin.txt" INTO TABLE Admin;

SELECT * FROM User;
SELECT * FROM Admin;
SELECT * FROM Product;