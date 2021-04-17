INSERT INTO customer(
	customer_id,
	first_name,
	last_name,
	billing_info,
	email
) VALUES(
	1,
	'Matt',
	'Yoon',
	'222 Main St Boston, MA 02215',
	'mattyoon@email.com'
);

INSERT INTO movie(
	movie_id,
	runtime,
	category,
	movie_name
) VALUES(
	1,
	150,
	'comedy',
	'Big Daddy'
);

INSERT INTO ticket(
	ticket_id,
	ticket_cost,
	movie_id,
	customer_id
) VALUES(
	1,
	15.00,
	1,
	1
);

INSERT INTO conc_order(
	conc_id,
	conc_cost,
	customer_id
) VALUES(
	1,
	20.00,
	1
);

INSERT INTO conc_product(
	conc_product_id,
	type_conc,
	conc_id
) VALUES(
	1,
	'popcorn',
	1
);

INSERT INTO customer(
	customer_id,
	first_name,
	last_name,
	billing_info,
	email
) VALUES(
	2,
	'John',
	'Smith',
	'555 Main St Boston, MA 02215',
	'johnsmith@email.com'
);

INSERT INTO movie(
	movie_id,
	runtime,
	category,
	movie_name
) VALUES(
	2,
	90,
	'action',
	'Die Hard'
);

SELECT *
FROM movie;