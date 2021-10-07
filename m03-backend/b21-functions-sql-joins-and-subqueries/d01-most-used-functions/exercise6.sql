SELECT
  COUNT(JOB_ID) AS 'Quantidade de pessoas que trabalham como pessoas programadoras'
FROM
  hr.employees
WHERE
  JOB_ID LIKE 'IT_PROG';