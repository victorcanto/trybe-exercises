SELECT
  m.title,
  bo.international_sales AS 'Numero de vendas'
FROM
  Pixar.Movies as m
  INNER JOIN Pixar.BoxOffice as bo ON m.id = bo.movie_id
WHERE
  bo.international_sales > bo.domestic_sales;