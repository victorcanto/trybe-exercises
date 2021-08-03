SELECT
  t.name,
  t.location
FROM
  Theater AS t
WHERE
  NOT EXISTS(
    SELECT
      *
    FROM
      Movies
    WHERE
      Movies.theater_id = t.id
  );