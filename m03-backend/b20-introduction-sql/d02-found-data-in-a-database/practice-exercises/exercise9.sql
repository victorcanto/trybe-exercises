--Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
SELECT CONCAT('O projeto ', Projects.Name, ' precisou de ',Projects.Hours, ' horas para ser concluído.') AS 'string' 
FROM Scientists.Projects;