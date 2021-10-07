SELECT
  JOB_ID AS 'Profissão',
  SUM(SALARY) AS qtd_dinheiro
FROM
  hr.employees
GROUP BY
  JOB_ID;