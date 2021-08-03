SELECT
  e.FIRST_NAME AS 'Nome',
  e.LAST_NAME AS 'Sobrenome',
  CONCAT(DATEDIFF(jh.END_DATE, jh.START_DATE), ' dias')
FROM
  hr.employees AS e
  INNER JOIN hr.job_history AS jh ON e.EMPLOYEE_ID = jh.EMPLOYEE_ID;