-- Question 1 List all customers who live in Texas (use JOINs)
SELECT *
FROM address

SELECT first_name, last_name, district
FROM customer
FULL JOIN address
ON customer.address_id = address.address_id
WHERE district = 'Texas';
-- Answer: 5 customers: Jennifer Davis, Kim Cruz, Richard Mccrary, Bryan Hardison, Ian Still

-- Question 2 Get all payments above $6.99 with the Customer's Full Name
SELECT first_name, last_name, amount
FROM customer
FULL JOIN payment
ON customer.customer_id = payment.customer_id
WHERE amount > 6.99;
-- Answer: TOTAL # of customers with payments over 6.99 = 1406

-- Question 3 Show all customers names who have made payments over $175(use subqueries)
SELECT *
FROM customer
WHERE customer_id IN(
	SELECT customer_id
	FROM payment
	GROUP BY customer_id
	HAVING SUM(amount) > 175
	ORDER BY SUM(amount) DESC
);
-- Answer: 6 customers with payments > 175$

-- Question 4 List all customers that live in Nepal (use the city table)
-- NEPAL COUNTRY ID = 66
SELECT *
FROM country
WHERE country = 'Nepal';

SELECT customer.first_name, customer.last_name, country
FROM customer
FULL JOIN address
ON customer.address_id = address.address_id
FULL JOIN city
ON address.city_id = city.city_id
FULL JOIN country
on city.country_id = country.country_id
WHERE country.country_id = 66;
-- ANSWER: 1 person. Kevin Schuler

-- Question 5 Which staff member had the most transactions?
SELECT first_name, last_name
FROM staff;

SELECT payment.staff_id, staff.first_name, staff.last_name, COUNT(payment_id) AS transactions
FROM payment
FULL JOIN staff
ON payment.staff_id = staff.staff_id
GROUP BY payment.staff_id, staff.first_name, staff.last_name;
-- ANSWER: Jon Stephens with 7304 transactions

-- QUESTION 6 How many movies of each rating are there?
SELECT rating
FROM film;

SELECT COUNT(film_id), rating
FROM film
GROUP BY rating
ORDER BY COUNT(film_id) ASC;
-- ANSWER: 178 G-rated, 194 PG, 195 R, 210 NC-17, 223 PG-13

-- QUESTION 7 Show all customers who have made a single payment above $6.99(Use Subqueries)
SELECT *
FROM customer
WHERE customer_id IN(
	SELECT customer_id
	FROM payment
	WHERE amount > 6.99
);
-- ANSWER 539 total customers made a payment > $6.99

-- QUESTION 8 How many free rentals did our stores give away?
SELECT COUNT(payment_id) AS num_free_rentals
FROM payment
WHERE amount = 0;
-- ANSWER: 24 total rentals that were free or cost = 0.00