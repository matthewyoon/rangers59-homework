-- Changing database structure (when needed)
-- Is done using the following commands/clauses, 
-- which are also a part of the DDL statement family
-- The statements we use to change the database are:
-- ALTER, UPDATE/SET, DELETE/WHERE, ADD(used with an ALTER statement), DROP
ALTER TABLE c_order
ALTER COLUMN cart_id
DROP NOT NULL; 

-- Check the structure of order_date data
SELECT order_date
FROM c_order;

-- Update order_date
UPDATE c_order
SET order_date = '2021-04-07'
WHERE order_date = '2021-04-06' AND cart_id = 1;

-- DELETE statement for brand where the seller_id is 2
DELETE FROM c_order
WHERE order_id = 1;

SELECT *
FROM c_order;

-- ADD statement for the customer table 
-- Adding an email column for customers
-- Usually used with an ALTER statement

ALTER TABLE customer
ADD email VARCHAR(150);

UPDATE customer
SET email = 'matty@gmail.com'
WHERE customer_id = 1;

SELECT *
FROM customer;

-- DROP statement for removing a table from the database
DROP TABLE inventory CASCADE;

customer, tickets, concessions, movies