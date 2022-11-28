-- create indexes

-- R6:
create index idx_pid on product(product_id);
create index idx_cid on comment(comment_id);
create index idx_pid_comment on comment(product_id);
