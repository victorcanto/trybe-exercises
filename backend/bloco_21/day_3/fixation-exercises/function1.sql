USE sakila;

DELIMITER $$

CREATE FUNCTION getFullAmountOfPayments(id INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE total INT;
SELECT 
  COUNT(*) 
FROM 
  sakila.payment
WHERE 
  customer_id = id
GROUP BY 
  customer_id INTO total;
RETURN total;
END $$

DELIMITER ;