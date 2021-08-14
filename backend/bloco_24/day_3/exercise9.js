db.movies.find(
  { category: 'adventure', ratings: { $gte: 103 } },
  { title: 1, ratings: 1, category: 1, _id: 0 }
);
