-- Create User table
create table User
(uid decimal (10,0) not null primary key,
profile text not null,
user_name VARCHAR (20) not null,
password text not null);


-- Create Admin Table
CREATE TABLE Admin
(
adminid decimal (10,0) not null REFERENCES User(uid),
PRIMARY KEY(adminid)
);

-- Insert an user
insert into User values
(1, "", "Daniel Ni", "cs348 is a great class");

-- Insert an admin
insert into Admin values
(1);

-- Update user information
update User 
set	profile = 'update',
user_name = 'update',
password = 'update'
where uid = 1;

-- Update admin information
update User
set	profile = 'update',
user_name = 'update',
password = 'update'
where uid = (select adminid
               from  Admin
                where adminid = 1);

-- Delete an admin
DELETE FROM Admin WHERE adminid=1;

-- Get a user by id
SELECT user_name
  FROM User
  WHERE uid = 1;

-- Get user profile url
SELECT profile
  FROM User
  WHERE uid = 1;
