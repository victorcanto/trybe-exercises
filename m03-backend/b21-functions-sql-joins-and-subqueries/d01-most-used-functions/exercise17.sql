SELECT
  LAST_NAME AS 'Sobrenome',
  DATE(HIRE_DATE) AS 'Data de contratação'
FROM
  hr.employees
WHERE
  YEAR(HIRE_DATE) = 1987
  AND MONTH(HIRE_DATE) = 7;