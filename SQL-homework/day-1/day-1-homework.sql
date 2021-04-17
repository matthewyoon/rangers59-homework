-- Question 1
-- How many actors are there with the last name ‘Wahlberg’? == 2
SELECT COUNT(last_name) as num_wahlberg
FROM actor
WHERE last_name = 'Wahlberg';

-- Question 2
-- How many payments were made between $3.99 and $5.99?

SELECT COUNT(amount) as num_between_399_599
FROM payment
WHERE amount > 3.99 and amount < 5.99;

-- Question 3
-- What film does the store have the most of? (search in inventory)
SELECT *
FROM inventory

SELECT film_id, COUNT(film_id) as num_top_film
FROM inventory
GROUP BY film_id
ORDER BY COUNT(film_id) DESC;

-- Question 4
-- How many customers have the last name ‘William’?
SELECT *
FROM customer;

SELECT COUNT(last_name) as num_william
FROM customer
WHERE last_name = 'William';

-- Question 5
-- What store employee (get the id) sold the most rentals?
SELECT *
FROM rental;

SELECT staff_id, COUNT(rental_id) as num_rentals
FROM rental
GROUP BY staff_id;

-- Question 6
-- How many different district names are there?
SELECT *
FROM address;

SELECT COUNT(distinct district)
FROM address;

-- Question 7
-- What film has the most actors in it? (use film_actor table and get film_id)
SELECT *
FROM film_actor
ORDER BY film_id;

SELECT film_id, COUNT(film_id) as top_num_actors
FROM film_actor
GROUP BY film_id
ORDER BY COUNT(film_id) DESC;

-- Question 8
-- From store_id 1, how many customers have a last name ending with ‘es’? (use customer table)
SELECT *
FROM customer
ORDER BY customer_id;

SELECT last_name, store_id
FROM customer
WHERE last_name LIKE '%es' AND store_id = '1';

-- Question 9
-- How many payment amounts (4.99, 5.99, etc.) had a number of rentals above 250 for customers 
-- with ids between 380 and 430? (use group by and having > 250)
SELECT *
FROM payment;

SELECT COUNT(amount) as num_payment_amounts
FROM payment
WHERE customer_id BETWEEN 380 AND 430
GROUP BY amount
HAVING COUNT(amount) > 250;

-- Question 10
-- Within the film table, how many rating categories are there? And what rating has the most movies total?
SELECT COUNT(distinct rating)
FROM film;

SELECT rating, COUNT (rating) as num_rating_categories
FROM film
GROUP BY rating
ORDER BY COUNT(rating) DESC;