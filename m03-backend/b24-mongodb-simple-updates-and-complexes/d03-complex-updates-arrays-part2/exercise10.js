db.movies.find({ category: { $size: 2 } }, { title: 1, _id: 0 });
