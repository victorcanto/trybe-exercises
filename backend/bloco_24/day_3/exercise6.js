db.movies.find({ ratings: { $gt: 103 } }, { title: 1, ratings: 1, _id: 0 });
