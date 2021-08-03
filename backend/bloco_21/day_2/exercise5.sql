SELECT
  *
FROM
  Pixar.Theater as t
  RIGHT JOIN Pixar.Movies as m ON t.id = m.theater_id
ORDER BY
  name;