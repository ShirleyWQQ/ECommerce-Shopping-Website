# TODO
- [ ] Finalized Schema
    - [ ] Naming Convention (product_id vs pid)
        - Need to update report/diagram/query accordingly
    - [ ] `NOT NULL` vs non-empty
        - Whether we allow a field to be empty vs not null
        - They are NOT the same, but they can work together
    - [ ] Length limit on columns
        - user_name
        - category_name
        - product_name: VARCHAR(100) vs TEXT
        - description
        - product_rating
        - picture_source
        - price
        - etc.
- [ ] Create additional sample data
    - [ ] Comment
    - [ ] Category
    - [ ] User
- [ ] Detail restriction on column
    - [ ] updated_time: TIMESTAMP
    - [ ] comment rating unsigned