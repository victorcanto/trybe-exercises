USE sakila;

DELIMITER $$

CREATE PROCEDURE getTop10ActorsByNumberOf() 
BEGIN
SELECT 
  actor_id AS 'Id do ator(a)', 
  COUNT(film_id) AS 'Quantidade de filmes' 
FROM sakila.film_actor
GROUP BY 
  actor_id 
ORDER BY 
  `Quantidade de filmes` DESC;
END $$

DELIMITER ;