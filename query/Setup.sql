-- Create the database
DROP DATABASE project;
CREATE DATABASE project;
USE project;
-- Create each table
-- // TODO: Placeholder, waiting for Daniel
CREATE TABLE User (user_id INT NOT NULL PRIMARY KEY);
-- // 
CREATE TABLE Category (
  category_id INT NOT NULL PRIMARY KEY,
  category_name VARCHAR(30)
);
CREATE TABLE Product (
  product_id INT NOT NULL PRIMARY KEY,
  description TEXT NOT NULL,
  price DECIMAL(5, 2),
  product_rating DECIMAL(2, 1),
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
  rating INT UNSIGNED,
  updated_time TIMESTAMP,
  content TEXT NOT NULL,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES Product(product_id) ON DELETE CASCADE,
  -- each user can only comment the product once
  UNIQUE KEY(user_id, product_id),
  check (
    rating >= 0
    and rating <= 5
  )
);

-- Import sample data into the tables
SHOW VARIABLES LIKE "secure_file_priv";
-- Above query will return you the "import" folder of MySQL
--   Copy the sample data file into this folder
--   Update the folder path below and run the query to import the dataset into tables
--   USE '/' instead of '\' in the path

-- ID 100+
LOAD DATA INFILE "C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/Shirley - Fruit.txt" INTO TABLE product;
-- ID 200+
LOAD DATA INFILE "C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/Sara - Baby Product.txt" INTO TABLE product;
-- ID 300+
LOAD DATA INFILE "C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/Colby - Vegetable.txt" INTO TABLE product;
-- ID 400`+
LOAD DATA INFILE "C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/Peter - Skincare.txt" INTO TABLE product;