USE sakila;

DELIMITER $$

CREATE PROCEDURE getCustomerStatus(
	IN user_email VARCHAR(50), 
  OUT isActive VARCHAR(50)
) 
BEGIN
SELECT 
	IF(active = 1, 'Cliente Ativo', 'Cliente Inativo') INTO isActive
FROM sakila.customer
WHERE email = user_email;
END $$

DELIMITER ;