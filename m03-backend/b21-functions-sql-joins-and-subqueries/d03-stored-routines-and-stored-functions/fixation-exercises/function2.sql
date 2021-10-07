USE sakila;

DELIMITER $$

CREATE FUNCTION getMovieName(id INT)
RETURNS VARCHAR(50) READS SQL DATA
BEGIN
DECLARE movie_name VARCHAR(50);
SELECT
	title 
FROM 
  sakila.film AS f
INNER JOIN 
  sakila.inventory AS i
ON i.film_id = f.film_id
WHERE 
  i.inventory_id = id INTO movie_name; 
RETURN movie_name;
END $$

DELIMITER ;