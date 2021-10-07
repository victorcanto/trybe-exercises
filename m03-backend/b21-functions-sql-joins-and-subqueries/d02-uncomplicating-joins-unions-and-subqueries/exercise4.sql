SELECT
  *
FROM
  Pixar.Movies as m
  LEFT JOIN Pixar.Theater as t ON t.id = m.theater_id
ORDER BY
  name;