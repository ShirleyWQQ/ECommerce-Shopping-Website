-- create indexes

-- R8:
create index idx_pid on product(product_id);
create index idx_cid on comment(comment_id);
create index idx_pid_comment on comment(product_id);

-- R9:
-- N/A, since we already created indexes for product(product_id) for feature R8

-- R10:


