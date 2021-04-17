-- Create 5 tables

-- Create customer table (no FK)
CREATE TABLE customer(
	customer_id SERIAL PRIMARY KEY,
	first_name VARCHAR(20),
	last_name VARCHAR(20),
	billing_info VARCHAR(100),
	email VARCHAR(100)
);

-- Create movie table (no FK)
CREATE TABLE movie(
	movie_id SERIAL PRIMARY KEY,
	runtime NUMERIC(3,0),
	category VARCHAR(100),
	movie_name VARCHAR(100)
);

CREATE TABLE ticket(
	ticket_id SERIAL PRIMARY KEY,
	ticket_cost NUMERIC(5,2),
	ticket_date_purchased DATE DEFAULT CURRENT_DATE,
	movie_id INTEGER NOT NULL,
	customer_id INTEGER NOT NULL,
	FOREIGN KEY(movie_id) REFERENCES movie(movie_id),
	FOREIGN KEY(customer_id) REFERENCES customer(customer_id)
);

CREATE TABLE conc_order(
	conc_id SERIAL PRIMARY KEY,
	conc_cost NUMERIC(5,2),
	conc_date_purchased DATE DEFAULT CURRENT_DATE,
	customer_id INTEGER NOT NULL,
	FOREIGN KEY(customer_id) REFERENCES customer(customer_id)
);

CREATE TABLE conc_product(
	conc_product_id SERIAL PRIMARY KEY,
	type_conc VARCHAR(150),
	conc_id INTEGER NOT NULL,
	FOREIGN KEY(conc_id) REFERENCES conc_order(conc_id)
);