db.movies.updateOne(
  { title: 'Batman' },
  {
    $push: {
      category: 'superhero',
    },
  }
);

db.movies.findOne().pretty();
