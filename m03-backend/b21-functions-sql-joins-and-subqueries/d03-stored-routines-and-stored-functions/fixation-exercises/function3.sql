USE sakila;

DELIMITER $$
	
CREATE FUNCTION getNumberOfMoviesByCategory(category_name VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
DECLARE qtd_total_movies INT;
SELECT 
	COUNT(*)
FROM 
	sakila.film_category AS fc
INNER JOIN 
  sakila.category AS c
ON 
  fc.category_id = c.category_id
WHERE 
  c.name = category_name
GROUP BY 
  fc.category_id 
INTO 
  qtd_total_movies;
RETURN qtd_total_movies;
END $$

DELIMITER ;