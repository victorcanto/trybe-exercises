db.movies.find({ ratings: { $size: 4 } }, { title: 1, _id: 0 });
