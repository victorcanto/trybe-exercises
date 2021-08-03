SELECT
  JOB_ID AS 'Profissão',
  ROUND(AVG(SALARY), 2) AS qtd_dinheiro
FROM
  hr.employees
GROUP BY
  JOB_ID
HAVING
  JOB_ID NOT LIKE 'IT_PROG';