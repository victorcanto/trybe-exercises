SELECT
  JOB_ID AS 'Profissão',
  SUM(SALARY) AS qtd_dinheiro
FROM
  hr.employees
WHERE
  JOB_ID = 'IT_PROG';