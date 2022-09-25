# CS348 Course Project
**In order to create our sample table and insert into it, we first need to login onto MySQL Command Line Client. Then we execute the following commands:**

CREATE DATABASE products;
USE products;
CREATE TABLE product(pid DECIMAL(6, 0) NOT NULL PRIMARY KEY, pname VARCHAR(20), price DECIMAL(5, 2), rating DECIMAL(1, 0));

**to insert into it we do:**

INSERT INTO product VALUES(000001, 'apple', 5.00, 4);
INSERT INTO product VALUES(000002, 'pear', 9.00, 5);
INSERT INTO product VALUES(000003, 'cucumber', 6.00, 4);
INSERT INTO product VALUES(000004, 'garlic', 5.00, 4);
INSERT INTO product VALUES(000005, 'eggplant', 5.00, 4);
INSERT INTO product VALUES(000006, 'tennis racket', 50.00, 3);
INSERT INTO product VALUES(000007, 'pingpong ball', 8.00, 4);
INSERT INTO product VALUES(000008, 'badminton net', 15.00, 2);
INSERT INTO product VALUES(000009, 'soccer ball', 25.00, 4);
INSERT INTO product VALUES(000010, 'pen', 1.00, 4);

**To view result:**

SELECT * FROM product;

**The result of the above comands are:**

+-----+---------------+-------+--------+
| pid | pname         | price | rating |
+-----+---------------+-------+--------+
|   1 | apple         |  5.00 |      4 |
|   2 | pear          |  9.00 |      5 |
|   3 | cucumber      |  6.00 |      4 |
|   4 | garlic        |  5.00 |      4 |
|   5 | eggplant      |  5.00 |      4 |
|   6 | tennis racket | 50.00 |      3 |
|   7 | pingpong ball |  8.00 |      4 |
|   8 | badminton net | 15.00 |      2 |
|   9 | soccer ball   | 25.00 |      4 |
|  10 | pen           |  1.00 |      4 |
+-----+---------------+-------+--------+
10 rows in set (0.09 sec)

