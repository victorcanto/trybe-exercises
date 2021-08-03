SELECT
  t.name,
  t.location
FROM
  Theater AS t
WHERE
  EXISTS(
    SELECT
      *
    FROM
      Movies
    WHERE
      Movies.theater_id = t.id
  );