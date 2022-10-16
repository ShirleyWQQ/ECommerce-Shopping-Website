-- Create User table
create table User
(user_id int (10,0) not null primary key,
profile text not null,
user_name VARCHAR (20) not null,
password text not null);
 

-- Create Admin Table
CREATE TABLE Admin
(
admin_id int (10,0) not null REFERENCES User(user_id),
PRIMARY KEY(admin_id)
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
where user_id = 1;

-- Update admin information
update User
set	profile = 'update',
user_name = 'update',
password = 'update'
where user_id = (select admin_id
               from  Admin
                where admin_id = 1);

-- Delete an admin
-- DELETE FROM Admin WHERE admin_id=1;

-- Get a user by user_id
SELECT *
  FROM User
  WHERE user_id = 1;

-- Get user profile url
SELECT profile
  FROM User
  WHERE user_id = 1;
