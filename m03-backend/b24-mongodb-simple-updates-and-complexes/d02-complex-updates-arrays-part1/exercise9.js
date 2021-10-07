db.movies.updateOne(
  { title: 'Home Alone' },
  {
    $set: {
      'cast.$[el].character': 'Marv',
    },
  },
  {
    arrayFilters: [
      {
        'el.actor': 'Daniel Stern',
      },
    ],
  }
);
