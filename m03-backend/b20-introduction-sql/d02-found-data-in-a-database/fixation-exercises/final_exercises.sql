SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT COUNT(*) FROM sakila.film;
SELECT DISTINCT last_name FROM sakila.actor;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
SELECT * FROM sakila.actor ORDER BY last_name ASC, first_name DESC;
SELECT name FROM sakila.language WHERE name != 'english';
SELECT title, release_year, rental_duration, rental_rate, replacement_cost FROM sakila.film 
ORDER BY rental_duration DESC, replacement_cost ASC LIMIT 20;