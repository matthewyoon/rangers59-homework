-- Adding address to customer
ALTER TABLE customer
ADD address VARCHAR(150);

UPDATE customer
SET address = '100 Main St Boston, MA 02215'
WHERE customer_id = 1;

UPDATE customer
SET address = '999 Main St Boston, MA 02215'
WHERE customer_id = 2;

-- Adding a rating to the movie column
ALTER TABLE movie
ADD rating VARCHAR(10);

UPDATE movie
SET rating = 'PG-13'
WHERE movie_id = 1;

UPDATE movie
SET rating = 'R'
WHERE movie_id = 2;

SELECT *
FROM movie