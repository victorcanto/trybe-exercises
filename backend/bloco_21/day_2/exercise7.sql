-- SUBQUERY
SELECT
  rating
FROM
  BoxOffice
WHERE
  movie_id IN (
    SELECT
      id
    FROM
      Movies
    WHERE
      year > 2009
  );
-- INNER JOIN
SELECT
  bo.rating
FROM
  BoxOffice AS bo
  INNER JOIN Movies AS m ON bo.movie_id = m.id
WHERE
  m.year > 2009;