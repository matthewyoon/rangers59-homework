-- Changed our ERD diagram to include the type of service
ALTER TABLE service_ticket
ADD service_type VARCHAR(150);

-- Adding customers stored function
CREATE OR REPLACE FUNCTION add_customer(_customer_id INTEGER, _first_name VARCHAR, _last_name VARCHAR, _billing_info VARCHAR, _address VARCHAR)
RETURNS void 
AS $MAIN$
BEGIN
	INSERT INTO customer(customer_id, first_name, last_name, billing_info, address)
	VALUES(_customer_id, _first_name, _last_name, _billing_info, _address);
END;
$MAIN$
LANGUAGE plpgsql;

SELECT add_customer(1,'John', 'Smith', '1111-1111-1111-1111, 1/11, 111', '111 Main St, Boston, MA, 11111');
SELECT add_customer(2,'Jane', 'Miller', '2222-2222-2222-2222, 2/22, 222', '222 Main St, Boston, MA 22222');

-- adding customer car stored function
CREATE OR REPLACE FUNCTION add_c_car(_car_id INTEGER,_make VARCHAR,_model VARCHAR,_year_ INTEGER,_color VARCHAR,_mileage INTEGER,_customer_id INTEGER)
RETURNS void 
AS $MAIN$
BEGIN
	INSERT INTO c_car(car_id, make, model, year_, color, mileage, customer_id)
	VALUES(_car_id, _make,_model,_year_,_color,_mileage,_customer_id);
END;
$MAIN$
LANGUAGE plpgsql;

SELECT add_c_car(1,'Honda','Civic',2021,'Black',0,1);
SELECT add_c_car(2,'Ford','Focus',2021,'White',8000,2);

-- adding salespersons stored function
CREATE OR REPLACE FUNCTION add_sales(_sales_id INTEGER,_first_name VARCHAR,_last_name VARCHAR)
RETURNS void 
AS $MAIN$
BEGIN
	INSERT INTO salesperson(sales_id,first_name,last_name)
	VALUES(_sales_id,_first_name,_last_name);
END;
$MAIN$
LANGUAGE plpgsql;

SELECT add_sales(1,'Wayne','Brady');
SELECT add_sales(2,'John','Tucker');

-- adding dealer_car stored function
CREATE OR REPLACE FUNCTION add_dealer(_dealer_id INTEGER,_make VARCHAR,_model VARCHAR,_year_ INTEGER,_color VARCHAR,_price NUMERIC(8,2),_status VARCHAR)
RETURNS void 
AS $MAIN$
BEGIN
	INSERT INTO dealer_car(dealer_id,make,model,year_,color,price,status)
	VALUES(_dealer_id,_make,_model,_year_,_color,_price,_status);
END;
$MAIN$
LANGUAGE plpgsql;

SELECT add_dealer(1,'Toyota','Camry',2019,'Red',12000.00,'Used');
SELECT add_dealer(2,'Nissan','Maxima',2021,'Blue',18000.00,'New');

--adding invoices stored function
CREATE OR REPLACE FUNCTION add_invoice(_invoice_id INTEGER,_sales_id INTEGER,_dealer_id INTEGER,_customer_id INTEGER)
RETURNS void 
AS $MAIN$
BEGIN
	INSERT INTO invoice(invoice_id, sales_id, dealer_id, customer_id)
	VALUES(_invoice_id,_sales_id,_dealer_id,_customer_id);
END;
$MAIN$
LANGUAGE plpgsql;

SELECT add_invoice(1,1,1,1);
SELECT add_invoice(2,2,2,2);

-- Kept getting a duplicate error, didn't realize my function worked
-- INSERT INTO invoice(
-- 	invoice_id,
-- 	sales_id,
-- 	dealer_id,
-- 	customer_id
-- ) VALUES(
-- 	1,
-- 	1,
-- 	1,
-- 	1
-- );

-- DELETE FROM invoice
-- WHERE invoice_id = 2;

-- adding mechanic values stored function
CREATE OR REPLACE FUNCTION add_mechanic(_mechanic_id INTEGER, _first_name VARCHAR, _last_name VARCHAR)
RETURNS void 
AS $MAIN$
BEGIN
	INSERT INTO mechanic(mechanic_id, first_name, last_name)
	VALUES(_mechanic_id, _first_name, _last_name);
END;
$MAIN$
LANGUAGE plpgsql;

SELECT add_mechanic(1, 'Harvey', 'Dent');
SELECT add_mechanic(2, 'Bruce', 'Wayne');

-- adding parts stored function
CREATE OR REPLACE FUNCTION add_parts(_parts_id INTEGER, _type_ VARCHAR, _cost_ NUMERIC(6,2))
RETURNS void
AS $MAIN$
BEGIN
	INSERT INTO parts(parts_id, type_, cost_)
	VALUES(_parts_id, _type_, _cost_);
END;
$MAIN$
LANGUAGE plpgsql;

SELECT add_parts(1, 'drivetrain', 800.00);
SELECT add_parts(2, 'transmission', 1000.00);

-- adding service ticket function
CREATE OR REPLACE FUNCTION add_service_ticket(_service_id INTEGER,_service_type VARCHAR,_service_cost NUMERIC(6,2),_status VARCHAR, _car_id INTEGER, _mechanic_id INTEGER, _parts_id INTEGER)
RETURNS void 
AS $MAIN$
BEGIN
	INSERT INTO service_ticket(service_id, service_type, service_cost, status, car_id, mechanic_id, parts_id)
	VALUES(_service_id,_service_type,_service_cost,_status, _car_id, _mechanic_id, _parts_id);
END;
$MAIN$
LANGUAGE plpgsql;

-- If no parts are needed, will need null in place of parts id
ALTER TABLE service_ticket
ALTER COLUMN parts_id
DROP NOT NULL; 

SELECT add_service_ticket(1,'oil change',40.00,'Used',1,1,NULL);
SELECT add_service_ticket(2,'replace transmission',800.00,'New',2,2,2);

SELECT*
FROM service_ticket;