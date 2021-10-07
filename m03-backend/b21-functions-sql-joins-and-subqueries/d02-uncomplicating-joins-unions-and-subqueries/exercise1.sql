SELECT
  m.title,
  bo.domestic_sales,
  bo.international_sales
FROM
  Pixar.Movies as m
  INNER JOIN Pixar.BoxOffice as bo ON m.id = bo.movie_id;