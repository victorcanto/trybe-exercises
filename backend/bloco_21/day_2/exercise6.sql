-- SUBQUERY
SELECT
  title
FROM
  Movies
WHERE
  id IN (
    SELECT
      movie_id
    FROM
      BoxOffice
    WHERE
      rating > 7.5
  );
-- INNER JOIN
SELECT
  m.title
FROM
  Movies m
  INNER JOIN BoxOffice b ON b.movie_id = m.id
WHERE
  b.rating > 7.5;