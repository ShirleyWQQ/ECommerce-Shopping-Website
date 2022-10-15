

-- -- testing purposes only for user and product
-- create table User
-- (uid decimal (4,0) not null primary key,
-- name varchar(30));

-- create table product
-- (pid decimal (4,0) not null primary key,
-- description varchar(500));   

-- insert into User values
-- (1, "Tim Tom");

-- insert into User values
-- (2, "Sara Sara");

-- insert into Product values
-- (1, "apple");

-- ----------------------------------


create table Comment
(cid decimal (4,0) not null primary key,
rating int signed,
updated timestamp,
content text not null,
pid decimal (4,0) not null,
uid decimal (4,0) not null,
foreign key (uid) references user(uid) on delete cascade,
foreign key (pid) references product(pid) on delete cascade,
unique key(uid, pid), -- each user can only comment the product once
check (rating>= 0 and rating <= 5));

insert into Comment values
(1, 3.5, '2020-10-14 10:20:00', "very good", 1, 1);

insert into Comment values
(2, 4.5, "2021-10-11 10:10:10", "I love it", 1, 2);


update Comment set
	content = 'update',
    updated = now()
    where cid = 1;
    
select * from Comment where pid = 1;