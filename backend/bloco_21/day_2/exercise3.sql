SELECT
  m.title AS 'Filme',
  bo.rating AS 'Rating'
FROM
  Pixar.Movies as m
  INNER JOIN Pixar.BoxOffice as bo ON m.id = bo.movie_id
ORDER BY
  rating DESC;